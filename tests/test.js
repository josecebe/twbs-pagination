(function ($) {

    var pag1 = $('#pagination'),
        destroyAndCreateWithOpts = function(elem, opts) {
            elem.twbsPagination('destroy');
            elem.twbsPagination(opts);
        };

    QUnit.test("Test destroy called before initialization", function (assert) {
        assert.ok(pag1.twbsPagination('destroy'));
    });

    QUnit.test("Test 'getPages' method (EVEN visible pages number)", function (assert) {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 30
        });

        assert.deepEqual(pag1.twbsPagination('getPages', 1), {currentPage: 1, numeric: [1, 2, 3, 4, 5]});
        assert.deepEqual(pag1.twbsPagination('getPages', 2), {currentPage: 2, numeric: [1, 2, 3, 4, 5]});
        assert.deepEqual(pag1.twbsPagination('getPages', 3), {currentPage: 3, numeric: [1, 2, 3, 4, 5]});

        assert.deepEqual(pag1.twbsPagination('getPages', 4), {currentPage: 4, numeric: [2, 3, 4, 5, 6]});
        assert.deepEqual(pag1.twbsPagination('getPages', 5), {currentPage: 5, numeric: [3, 4, 5, 6, 7]});
        assert.deepEqual(pag1.twbsPagination('getPages', 20), {currentPage: 20, numeric: [18, 19, 20, 21, 22]});

        assert.deepEqual(pag1.twbsPagination('getPages', 27), {currentPage: 27, numeric: [25, 26, 27, 28, 29]});
        assert.deepEqual(pag1.twbsPagination('getPages', 28), {currentPage: 28, numeric: [26, 27, 28, 29, 30]});
        assert.deepEqual(pag1.twbsPagination('getPages', 29), {currentPage: 29, numeric: [26, 27, 28, 29, 30]});
        assert.deepEqual(pag1.twbsPagination('getPages', 30), {currentPage: 30, numeric: [26, 27, 28, 29, 30]});
    });

    QUnit.test("Test 'getPages' method (ODD visible pages number)", function (assert) {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 30,
            visiblePages: 6
        });

        assert.deepEqual(pag1.twbsPagination('getPages', 1), {currentPage: 1, numeric: [1, 2, 3, 4, 5, 6]});
        assert.deepEqual(pag1.twbsPagination('getPages', 2), {currentPage: 2, numeric: [1, 2, 3, 4, 5, 6]});
        assert.deepEqual(pag1.twbsPagination('getPages', 3), {currentPage: 3, numeric: [1, 2, 3, 4, 5, 6]});

        assert.deepEqual(pag1.twbsPagination('getPages', 4), {currentPage: 4, numeric: [2, 3, 4, 5, 6, 7]});
        assert.deepEqual(pag1.twbsPagination('getPages', 5), {currentPage: 5, numeric: [3, 4, 5, 6, 7, 8]});
        assert.deepEqual(pag1.twbsPagination('getPages', 20), {currentPage: 20, numeric: [18, 19, 20, 21, 22, 23]});

        assert.deepEqual(pag1.twbsPagination('getPages', 27), {currentPage: 27, numeric: [25, 26, 27, 28, 29, 30]});
        assert.deepEqual(pag1.twbsPagination('getPages', 28), {currentPage: 28, numeric: [25, 26, 27, 28, 29, 30]});
        assert.deepEqual(pag1.twbsPagination('getPages', 29), {currentPage: 29, numeric: [25, 26, 27, 28, 29, 30]});
        assert.deepEqual(pag1.twbsPagination('getPages', 30), {currentPage: 30, numeric: [25, 26, 27, 28, 29, 30]});
    });

    QUnit.test("Test 'getPages' method (total < visible)", function (assert) {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 3,
            visiblePages: 5
        });
        assert.deepEqual(pag1.twbsPagination('getPages', 1), {currentPage: 1, numeric: [1, 2, 3]});
        assert.deepEqual(pag1.twbsPagination('getPages', 2), {currentPage: 2, numeric: [1, 2, 3]});
        assert.deepEqual(pag1.twbsPagination('getPages', 3), {currentPage: 3, numeric: [1, 2, 3]});
    });

    QUnit.test("Test classes appended for pagination", function (assert) {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 3,
            visiblePages: 5
        });
        assert.equal(pag1.find('.page-item').length, 7);
        assert.equal(pag1.find('.next').length, 1);
        assert.equal(pag1.find('.prev').length, 1);
        assert.equal(pag1.find('.last').length, 1);
        assert.equal(pag1.find('.first').length, 1);
        assert.equal(pag1.find('.page-item.active').length, 1);
        assert.equal(pag1.find('.prev.disabled').length, 1);
        assert.equal(pag1.find('.first.disabled').length, 1);
    });

    QUnit.test("Test custom classes appended for pagination", function (assert) {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 10,
            visiblePages: 5,
            pageClass: 'my-page',
            nextClass: 'my-next-page',
            prevClass: 'my-prev-page',
            lastClass: 'my-last-page',
            firstClass: 'my-first-page',
            activeClass: 'my-active-class',
            disabledClass: 'my-disabled-class'
        });
        assert.equal(pag1.find('.my-page').length, 5);
        assert.equal(pag1.find('.my-next-page').length, 1);
        assert.equal(pag1.find('.my-prev-page').length, 1);
        assert.equal(pag1.find('.my-last-page').length, 1);
        assert.equal(pag1.find('.my-first-page').length, 1);
        assert.equal(pag1.find('.my-page.my-active-class').length, 1);
        assert.equal(pag1.find('.my-prev-page.my-disabled-class').length, 1);
        assert.equal(pag1.find('.my-first-page.my-disabled-class').length, 1);
    });

    QUnit.test("Test page numbers text", function (assert) {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 2
        });
        assert.equal(pag1.find('.page-item:eq(2)').text(), '1');
        assert.equal(pag1.find('.next').text(), 'Next');
        assert.equal(pag1.find('.prev').text(), 'Previous');
        assert.equal(pag1.find('.first').text(), 'First');
        assert.equal(pag1.find('.last').text(), 'Last');
    });

    QUnit.test("Test custom texts", function (assert) {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 2,
            page: '[{{page}}]',
            first: '(first)',
            prev: '<<',
            next: '>>',
            last: '(last)[{{total_pages}}]'
        });
        assert.equal(pag1.find('.page-item:eq(2)').text(), '[1]');
        assert.equal(pag1.find('.next').text(), '>>');
        assert.equal(pag1.find('.prev').text(), '<<');
        assert.equal(pag1.find('.first').text(), '(first)');
        assert.equal(pag1.find('.last').text(), '(last)[2]');
    });

    QUnit.test("Test 'getPageFromQueryString' method", function (assert) {
        destroyAndCreateWithOpts(pag1, {pageVariable: 'page'});
        assert.equal(pag1.twbsPagination('getPageFromQueryString', '?page=1'), 1);
        assert.equal(pag1.twbsPagination('getPageFromQueryString', '?page='), null);
        assert.equal(pag1.twbsPagination('getPageFromQueryString', '?page'), null);
        assert.equal(pag1.twbsPagination('getPageFromQueryString', '?'), null);
        assert.equal(pag1.twbsPagination('getPageFromQueryString', ''), null);
        assert.equal(pag1.twbsPagination('getPageFromQueryString', '?page=2'), 2);
        assert.equal(pag1.twbsPagination('getPageFromQueryString', '?page=3&param=taram'), 3);
        assert.equal(pag1.twbsPagination('getPageFromQueryString', '?page=4&param=test&opilki'), 4);
        assert.equal(pag1.twbsPagination('getPageFromQueryString', '?page=5&param=test or not&opilki='), 5);
        assert.equal(pag1.twbsPagination('getPageFromQueryString', '?ID=1&keyWord=net&page=6'), 6);
    });

    QUnit.test("Test 'generateQueryString' method", function (assert) {
        destroyAndCreateWithOpts(pag1, {pageVariable: 'page'});
        assert.equal(pag1.twbsPagination('generateQueryString', 1, '?page=1'), '?page=1');
        assert.equal(pag1.twbsPagination('generateQueryString', 1, '?page='), '?page=1');
        assert.equal(pag1.twbsPagination('generateQueryString', 1, '?page'), '?page=1');
        assert.equal(pag1.twbsPagination('generateQueryString', 1, '?'), '');
        assert.equal(pag1.twbsPagination('generateQueryString', 1, ''), window.location.search);

        assert.equal(pag1.twbsPagination('generateQueryString', 2, '?page=1'), '?page=2');
        assert.equal(pag1.twbsPagination('generateQueryString', 3, '?page=2&param=taram'), '?page=3&param=taram');
        assert.equal(pag1.twbsPagination('generateQueryString', 4, '?page=3&param=test&opilki'), '?page=4&param=test&opilki');
        assert.equal(pag1.twbsPagination('generateQueryString', 5, '?page=4&param=test or not&opilki='), '?page=5&param=test or not&opilki=');
        assert.equal(pag1.twbsPagination('generateQueryString', 6, '?ID=1&keyWord=net&page=50'), '?ID=1&keyWord=net&page=6');
    });

    QUnit.test("Test 'hideOnlyOnePage' option", function (assert) {
        var page = null;

        destroyAndCreateWithOpts(pag1, {onPageClick: function (evt, p) {
            page = p;
        }});
        assert.equal(pag1.find('li').length, 5, 'Default options values');
        assert.equal(page, 1);
        page = null;

        destroyAndCreateWithOpts(pag1, {
            hideOnlyOnePage: true,
            onPageClick: function (evt, p) {
                page = p;
            }
        });
        assert.equal(pag1.find('li').length, 0, 'Hide one page is corresponding option set as true');
        assert.equal(page, 1);
        page = null;
    });

    var checkCommon = function (assert) {
        assert.ok($(pag1.find('li').get(0)).hasClass('first'));
        assert.ok($(pag1.find('li').get(1)).hasClass('prev'));
        assert.ok($(pag1.find('li').get(-1)).hasClass('last'));
        assert.ok($(pag1.find('li').get(-2)).hasClass('next'));
    };
    var checkLeftBound = function (assert) {
        checkCommon(assert);
        var disabledClass = pag1.data('twbs-pagination').options.disabledClass;
        assert.ok($(pag1.find('li').get(0)).hasClass(disabledClass));
        assert.ok($(pag1.find('li').get(1)).hasClass(disabledClass));
        assert.ok(! $(pag1.find('li').get(-1)).hasClass(disabledClass));
        assert.ok(! $(pag1.find('li').get(-2)).hasClass(disabledClass));
    };
    var checkMiddle = function (assert) {
        checkCommon(assert);
        var disabledClass = pag1.data('twbs-pagination').options.disabledClass;
        assert.ok(! $(pag1.find('li').get(0)).hasClass(disabledClass));
        assert.ok(! $(pag1.find('li').get(1)).hasClass(disabledClass));
        assert.ok(! $(pag1.find('li').get(-1)).hasClass(disabledClass));
        assert.ok(! $(pag1.find('li').get(-2)).hasClass(disabledClass));
    };
    var checkRightBound = function (assert) {
        checkCommon(assert);
        var disabledClass = pag1.data('twbs-pagination').options.disabledClass;
        assert.ok(! $(pag1.find('li').get(0)).hasClass(disabledClass));
        assert.ok(! $(pag1.find('li').get(1)).hasClass(disabledClass));
        assert.ok($(pag1.find('li').get(-1)).hasClass(disabledClass));
        assert.ok($(pag1.find('li').get(-2)).hasClass(disabledClass));
    };
    var testSimple = function (assert, bound) {
        destroyAndCreateWithOpts(pag1, { totalPages: bound, visiblePages: bound });

        var twice = 2;
        while (twice > 0) {
            checkLeftBound(assert);
            assert.ok($(pag1.find('li').get(2)).hasClass('active'));
            $(pag1.find('li').get(2)).trigger('click');
            twice--;
        }

        var i = 3;
        while (i < (bound + 1)) {
            $(pag1.find('li').get(i)).trigger('click');
            assert.ok($(pag1.find('li').get(i)).hasClass('active'));
            checkMiddle(assert);
            i++;
        }

        $(pag1.find('li').get(i)).trigger('click');
        assert.ok($(pag1.find('li').get(i)).hasClass('active'));
        checkRightBound(assert);
    };
    QUnit.test("Testing default UI behaviour (Total: 5, Visible: 5)", function (assert) {
        testSimple(assert, 5);
    });

    QUnit.test("Testing default UI behaviour (Total: 10, Visible: 10)", function (assert) {
        testSimple(assert, 10);
    });

    QUnit.test("Testing default UI behaviour (Total: 20, Visible: 5)", function (assert) {
        destroyAndCreateWithOpts(pag1, { totalPages: 20, visiblePages: 5 });

        var twice = 2;
        while (twice > 0) {
            checkLeftBound(assert);
            assert.ok($(pag1.find('li').get(2)).hasClass('active'));
            $(pag1.find('li').get(2)).trigger('click');
            twice--;
        }

        var i = 3;
        while (true) {
            if (i < 5) {
                $(pag1.find('li').get(i)).trigger('click');
                assert.ok($(pag1.find('li').get(i)).hasClass('active'));
            } else {
                $(pag1.find('li').get(5)).trigger('click');
                assert.ok($(pag1.find('li').get(4)).hasClass('active'));
                if (i > 18) {
                    break;
                }
            }
            checkMiddle(assert);
            i++;
        }

        $(pag1.find('li').get(5)).trigger('click');
        assert.ok($(pag1.find('li').get(5)).hasClass('active'));
        checkMiddle(assert);

        $(pag1.find('li').get(6)).trigger('click');
        assert.ok($(pag1.find('li').get(6)).hasClass('active'));
        checkRightBound(assert);
    });

    QUnit.test("Testing default UI behaviour (Total: 5, Visible: 3) / Click on buttons", function (assert) {
        destroyAndCreateWithOpts(pag1, { totalPages: 5, visiblePages: 3 });

        // click next btn
        $(pag1.find('li').get(5)).trigger('click');
        checkMiddle(assert);

        // click last btn
        $(pag1.find('li').get(6)).trigger('click');
        checkRightBound(assert);

        // click prev btn
        $(pag1.find('li').get(1)).trigger('click');
        checkMiddle(assert);

        // click first btn
        $(pag1.find('li').get(0)).trigger('click');
        checkLeftBound(assert);
    });

    QUnit.test("Testing 'enable' and 'disable' methods", function (assert) {
        destroyAndCreateWithOpts(pag1, { totalPages: 5, visiblePages: 3 });
        checkLeftBound(assert);

        var disabledClass = pag1.data('twbs-pagination').options.disabledClass;
        var activeClass = pag1.data('twbs-pagination').options.activeClass;

        pag1.twbsPagination('disable');
        var dCnt = 0, aCnt = 0;
        pag1.find('li').each(function () {
            var $this = $(this);
            if (!$this.hasClass(activeClass)) {
                assert.ok($this.hasClass(disabledClass));
                dCnt++;
            } else {
                aCnt++;
            }
        });
        assert.equal(6, dCnt);
        assert.equal(1, aCnt);

        pag1.twbsPagination('enable');
        checkLeftBound(assert);
    });

    QUnit.test("Testing 'onPageClick' methods", function (assert) {
        var $html = $('<ul id="test-pagination">' +
            '<li id="page-1">Page1</li>' +
            '<li id="page-2">Page2</li>' +
            '<li id="page-3">Page3</li>' +
            '</ul>').appendTo('body');
        assert.ok($('body').find('#test-pagination').length > 0);
        var calledEvt = false;
        var calledPage = false;
        var calledCnt = 0;
        var testClick = function (evt, page) {
            calledEvt = evt;
            calledPage = page;
            calledCnt++;
        };
        $html.twbsPagination({
            onPageClick: testClick,
            totalPages: 3
        });
        var pagination = $html.data('twbsPagination');
        assert.ok(pagination.options.totalPages === 3);
        assert.ok(calledPage === 1, "onPageClick should be called with first page on initialization");
        assert.ok(typeof calledEvt === "object", "onPageClick should be called with event object");
        assert.ok(calledCnt === 1, "onPageClick should be called once on initialization");
        $html.remove();
    });

    QUnit.test("Testing 'onPageClick' triggering events", function (assert) {
        var $html = $('<ul id="test-pagination">' +
            '<li id="page-1">Page1</li>' +
            '<li id="page-2">Page2</li>' +
            '<li id="page-3">Page3</li>' +
            '</ul>').appendTo('body');
        var calledEvt = false;
        var calledPage = false;
        var calledCnt = 0;
        var testClick = function (evt, page) {
            calledEvt = evt;
            calledPage = page;
            calledCnt++;
        };
        $html.twbsPagination({
            onPageClick: testClick,
            totalPages: 3
        });
        var pagination = $html.data('twbsPagination');
        $html.trigger('page', 2);
        $html.trigger('page', 1);
        $html.trigger('page', 3);
        assert.ok(pagination.options.totalPages === 3);
        // Should be equal to latest page
        assert.ok(calledPage === 3, "called page should be equal to latest triggered page = " + calledPage);
        assert.ok(typeof calledEvt === "object", "called event should be available");
        assert.ok(calledCnt === 4, "called count should be equal to first+all triggered counts = " + calledCnt);
        $html.remove();
    });

    QUnit.test("Testing 'onPageClick' with show method", function (assert) {
        var $html = $('<ul id="test-pagination">' +
            '<li id="page-1">Page1</li>' +
            '<li id="page-2">Page2</li>' +
            '<li id="page-3">Page3</li>' +
            '</ul>').appendTo('body');
        var calledEvt = false;
        var calledPage = false;
        var calledCnt = 0;
        var testClick = function (evt, page) {
            calledEvt = evt;
            calledPage = page;
            calledCnt++;
        };
        $html.twbsPagination({
            onPageClick: testClick,
            totalPages: 3
        });
        var pagination = $html.data('twbsPagination');
        pagination.show(2);
        pagination.show(1);
        pagination.show(3);
        assert.ok(pagination.options.totalPages === 3);
        // Should be equal to latest page
        assert.ok(calledPage === 3, "called page should be equal to latest triggered page = " + calledPage);
        assert.ok(typeof calledEvt === "object");
        assert.ok(calledCnt === 4, "called count should be equal to first+all triggered counts = " + calledCnt);
        $html.remove();
    });

    QUnit.test("Testing throws error with show method", function (assert) {
        var $html = $('<ul id="test-pagination">' +
            '<li id="page-1">Page1</li>' +
            '<li id="page-2">Page2</li>' +
            '<li id="page-3">Page3</li>' +
            '</ul>').appendTo('body');
        $html.twbsPagination({
            totalPages: 3
        });
        var pagination = $html.data('twbsPagination');
        assert.throws(function () {
                pagination.show(20)
            }, "error should be thrown if wrong page provided"
        );
        $html.remove();
    });

    QUnit.test("Test 'changeTotalPages' method", function (assert) {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 6,
            visiblePages: 5
        });
        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 30, 1), {currentPage: 1, numeric: [1, 2, 3, 4, 5]});
        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 30, 2), {currentPage: 2, numeric: [1, 2, 3, 4, 5]});
        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 30, 3), {currentPage: 3, numeric: [1, 2, 3, 4, 5]});

        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 40, 4), {currentPage: 4, numeric: [2, 3, 4, 5, 6]});
        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 40, 5), {currentPage: 5, numeric: [3, 4, 5, 6, 7]});
        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 40, 20), {currentPage: 20, numeric: [18, 19, 20, 21, 22]});

        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 50, 47), {currentPage: 47, numeric: [45, 46, 47, 48, 49]});
        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 50, 48), {currentPage: 48, numeric: [46, 47, 48, 49, 50]});
        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 50, 49), {currentPage: 49, numeric: [46, 47, 48, 49, 50]});
        assert.deepEqual(pag1.twbsPagination('changeTotalPages', 50, 50), {currentPage: 50, numeric: [46, 47, 48, 49, 50]});
    });
})(window.jQuery);
