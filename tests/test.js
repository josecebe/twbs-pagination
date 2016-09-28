(function ($) {

    var pag1 = $('#pagination'),
        destroyAndCreateWithOpts = function(elem, opts) {
            elem.twbsPagination('destroy');
            elem.twbsPagination(opts);
        };

    QUnit.test("Test destroy called before initialization", function () {
        ok(pag1.twbsPagination('destroy'));
    });

    QUnit.test("Test 'getPages' method (EVEN visible pages number)", function () {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 30
        });

        deepEqual(pag1.twbsPagination('getPages', 1), {currentPage: 1, numeric: [1, 2, 3, 4, 5]});
        deepEqual(pag1.twbsPagination('getPages', 2), {currentPage: 2, numeric: [1, 2, 3, 4, 5]});
        deepEqual(pag1.twbsPagination('getPages', 3), {currentPage: 3, numeric: [1, 2, 3, 4, 5]});

        deepEqual(pag1.twbsPagination('getPages', 4), {currentPage: 4, numeric: [2, 3, 4, 5, 6]});
        deepEqual(pag1.twbsPagination('getPages', 5), {currentPage: 5, numeric: [3, 4, 5, 6, 7]});
        deepEqual(pag1.twbsPagination('getPages', 20), {currentPage: 20, numeric: [18, 19, 20, 21, 22]});

        deepEqual(pag1.twbsPagination('getPages', 27), {currentPage: 27, numeric: [25, 26, 27, 28, 29]});
        deepEqual(pag1.twbsPagination('getPages', 28), {currentPage: 28, numeric: [26, 27, 28, 29, 30]});
        deepEqual(pag1.twbsPagination('getPages', 29), {currentPage: 29, numeric: [26, 27, 28, 29, 30]});
        deepEqual(pag1.twbsPagination('getPages', 30), {currentPage: 30, numeric: [26, 27, 28, 29, 30]});
    });

    QUnit.test("Test 'getPages' method (ODD visible pages number)", function () {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 30,
            visiblePages: 6
        });

        deepEqual(pag1.twbsPagination('getPages', 1), {currentPage: 1, numeric: [1, 2, 3, 4, 5, 6]});
        deepEqual(pag1.twbsPagination('getPages', 2), {currentPage: 2, numeric: [1, 2, 3, 4, 5, 6]});
        deepEqual(pag1.twbsPagination('getPages', 3), {currentPage: 3, numeric: [1, 2, 3, 4, 5, 6]});

        deepEqual(pag1.twbsPagination('getPages', 4), {currentPage: 4, numeric: [2, 3, 4, 5, 6, 7]});
        deepEqual(pag1.twbsPagination('getPages', 5), {currentPage: 5, numeric: [3, 4, 5, 6, 7, 8]});
        deepEqual(pag1.twbsPagination('getPages', 20), {currentPage: 20, numeric: [18, 19, 20, 21, 22, 23]});

        deepEqual(pag1.twbsPagination('getPages', 27), {currentPage: 27, numeric: [25, 26, 27, 28, 29, 30]});
        deepEqual(pag1.twbsPagination('getPages', 28), {currentPage: 28, numeric: [25, 26, 27, 28, 29, 30]});
        deepEqual(pag1.twbsPagination('getPages', 29), {currentPage: 29, numeric: [25, 26, 27, 28, 29, 30]});
        deepEqual(pag1.twbsPagination('getPages', 30), {currentPage: 30, numeric: [25, 26, 27, 28, 29, 30]});
    });

    QUnit.test("Test 'getPages' method (total < visible)", function () {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 3,
            visiblePages: 5
        });
        deepEqual(pag1.twbsPagination('getPages', 1), {currentPage: 1, numeric: [1, 2, 3]});
        deepEqual(pag1.twbsPagination('getPages', 2), {currentPage: 2, numeric: [1, 2, 3]});
        deepEqual(pag1.twbsPagination('getPages', 3), {currentPage: 3, numeric: [1, 2, 3]});
    });

    QUnit.test("Test classes appended for pagination", function () {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 3,
            visiblePages: 5
        });
        equal(pag1.find('.page-item').length, 7);
        equal(pag1.find('.next').length, 1);
        equal(pag1.find('.prev').length, 1);
        equal(pag1.find('.last').length, 1);
        equal(pag1.find('.first').length, 1);
        equal(pag1.find('.page-item.active').length, 1);
        equal(pag1.find('.prev.disabled').length, 1);
        equal(pag1.find('.first.disabled').length, 1);
    });

    QUnit.test("Test custom classes appended for pagination", function () {
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
        equal(pag1.find('.my-page').length, 5);
        equal(pag1.find('.my-next-page').length, 1);
        equal(pag1.find('.my-prev-page').length, 1);
        equal(pag1.find('.my-last-page').length, 1);
        equal(pag1.find('.my-first-page').length, 1);
        equal(pag1.find('.my-page.my-active-class').length, 1);
        equal(pag1.find('.my-prev-page.my-disabled-class').length, 1);
        equal(pag1.find('.my-first-page.my-disabled-class').length, 1);
    });

    QUnit.test("Test page numbers text", function () {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 2
        });
        equal(pag1.find('.page-item:eq(2)').text(), '1');
        equal(pag1.find('.next').text(), 'Next');
        equal(pag1.find('.prev').text(), 'Previous');
        equal(pag1.find('.first').text(), 'First');
        equal(pag1.find('.last').text(), 'Last');
    });

    QUnit.test("Test custom texts", function () {
        destroyAndCreateWithOpts(pag1, {
            totalPages: 2,
            page: '[{{page}}]',
            first: '(first)',
            prev: '<<',
            next: '>>',
            last: '(last)[{{total_pages}}]'
        });
        equal(pag1.find('.page-item:eq(2)').text(), '[1]');
        equal(pag1.find('.next').text(), '>>');
        equal(pag1.find('.prev').text(), '<<');
        equal(pag1.find('.first').text(), '(first)');
        equal(pag1.find('.last').text(), '(last)[2]');
    });

    QUnit.test("Test 'getPageFromQueryString' method", function () {
        destroyAndCreateWithOpts(pag1, {pageVariable: 'page'});
        equal(pag1.twbsPagination('getPageFromQueryString', '?page=1'), 1);
        equal(pag1.twbsPagination('getPageFromQueryString', '?page='), null);
        equal(pag1.twbsPagination('getPageFromQueryString', '?page'), null);
        equal(pag1.twbsPagination('getPageFromQueryString', '?'), null);
        equal(pag1.twbsPagination('getPageFromQueryString', ''), null)
        ;
        equal(pag1.twbsPagination('getPageFromQueryString', '?page=2'), 2);
        equal(pag1.twbsPagination('getPageFromQueryString', '?page=3&param=taram'), 3);
        equal(pag1.twbsPagination('getPageFromQueryString', '?page=4&param=test&opilki'), 4);
        equal(pag1.twbsPagination('getPageFromQueryString', '?page=5&param=test or not&opilki='), 5);
        equal(pag1.twbsPagination('getPageFromQueryString', '?ID=1&keyWord=net&page=6'), 6);
    });

    QUnit.test("Test 'generateQueryString' method", function () {
        destroyAndCreateWithOpts(pag1, {pageVariable: 'page'});
        equal(pag1.twbsPagination('generateQueryString', 1, '?page=1'), '?page=1');
        equal(pag1.twbsPagination('generateQueryString', 1, '?page='), '?page=1');
        equal(pag1.twbsPagination('generateQueryString', 1, '?page'), '?page=1');
        equal(pag1.twbsPagination('generateQueryString', 1, '?'), '');
        equal(pag1.twbsPagination('generateQueryString', 1, ''), window.location.search);

        equal(pag1.twbsPagination('generateQueryString', 2, '?page=1'), '?page=2');
        equal(pag1.twbsPagination('generateQueryString', 3, '?page=2&param=taram'), '?page=3&param=taram');
        equal(pag1.twbsPagination('generateQueryString', 4, '?page=3&param=test&opilki'), '?page=4&param=test&opilki');
        equal(pag1.twbsPagination('generateQueryString', 5, '?page=4&param=test or not&opilki='), '?page=5&param=test or not&opilki=');
        equal(pag1.twbsPagination('generateQueryString', 6, '?ID=1&keyWord=net&page=50'), '?ID=1&keyWord=net&page=6');
    });

    QUnit.test("Test 'totalPages' option", function (assert) {
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

})(window.jQuery);