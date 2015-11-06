(function ($) {

    var pag1 = $('#pagination');

    QUnit.test("Test destroy called before initialization", function () {
        ok(pag1.twbsPagination('destroy'));
    });

    QUnit.test("Test 'getPages' method (EVEN visible pages number)", function () {
        pag1.twbsPagination('destroy');
        pag1.twbsPagination({
            totalPages: 30
        });

        var expected1 = {currentPage: 1, numeric: [1, 2, 3, 4, 5]};
        deepEqual(pag1.twbsPagination('getPages', 1), expected1);
        var expected2 = {currentPage: 2, numeric: [1, 2, 3, 4, 5]};
        deepEqual(pag1.twbsPagination('getPages', 2), expected2);
        var expected3 = {currentPage: 3, numeric: [1, 2, 3, 4, 5]};
        deepEqual(pag1.twbsPagination('getPages', 3), expected3);

        var expected4 = {currentPage: 4, numeric: [2, 3, 4, 5, 6]};
        deepEqual(pag1.twbsPagination('getPages', 4), expected4);
        var expected5 = {currentPage: 5, numeric: [3, 4, 5, 6, 7]};
        deepEqual(pag1.twbsPagination('getPages', 5), expected5);
        var expected20 = {currentPage: 20, numeric: [18, 19, 20, 21, 22]};
        deepEqual(pag1.twbsPagination('getPages', 20), expected20);

        var expected27 = {currentPage: 27, numeric: [25, 26, 27, 28, 29]};
        deepEqual(pag1.twbsPagination('getPages', 27), expected27);
        var expected28 = {currentPage: 28, numeric: [26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 28), expected28);
        var expected29 = {currentPage: 29, numeric: [26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 29), expected29);
        var expected30 = {currentPage: 30, numeric: [26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 30), expected30);
    });

    QUnit.test("Test 'getPages' method (ODD visible pages number)", function () {
        pag1.twbsPagination('destroy');
        pag1.twbsPagination({
            totalPages: 30,
            visiblePages: 6
        });

        var expected1 = {currentPage: 1, numeric: [1, 2, 3, 4, 5, 6]};
        deepEqual(pag1.twbsPagination('getPages', 1), expected1);
        var expected2 = {currentPage: 2, numeric: [1, 2, 3, 4, 5, 6]};
        deepEqual(pag1.twbsPagination('getPages', 2), expected2);
        var expected3 = {currentPage: 3, numeric: [1, 2, 3, 4, 5, 6]};
        deepEqual(pag1.twbsPagination('getPages', 3), expected3);

        var expected4 = {currentPage: 4, numeric: [2, 3, 4, 5, 6, 7]};
        deepEqual(pag1.twbsPagination('getPages', 4), expected4);
        var expected5 = {currentPage: 5, numeric: [3, 4, 5, 6, 7, 8]};
        deepEqual(pag1.twbsPagination('getPages', 5), expected5);
        var expected20 = {currentPage: 20, numeric: [18, 19, 20, 21, 22, 23]};
        deepEqual(pag1.twbsPagination('getPages', 20), expected20);

        var expected27 = {currentPage: 27, numeric: [25, 26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 27), expected27);
        var expected28 = {currentPage: 28, numeric: [25, 26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 28), expected28);
        var expected29 = {currentPage: 29, numeric: [25, 26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 29), expected29);
        var expected30 = {currentPage: 30, numeric: [25, 26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 30), expected30);
    });

    QUnit.test("Test 'getPages' method (total < visible)", function () {
        pag1.twbsPagination('destroy');
        pag1.twbsPagination({
            totalPages: 3,
            visiblePages: 5
        });
        var exp1 = {currentPage: 1, numeric: [1, 2, 3]};
        deepEqual(pag1.twbsPagination('getPages', 1), exp1);
        var exp2 = {currentPage: 2, numeric: [1, 2, 3]};
        deepEqual(pag1.twbsPagination('getPages', 2), exp2);
        var exp3 = {currentPage: 3, numeric: [1, 2, 3]};
        deepEqual(pag1.twbsPagination('getPages', 3), exp3);
    });

    QUnit.test("Test classes appended for pagination", function () {
        pag1.twbsPagination('destroy');
        pag1.twbsPagination({
            totalPages: 3,
            visiblePages: 5
        });
        equal(pag1.find('.page').length, 3);
        equal(pag1.find('.next').length, 1);
        equal(pag1.find('.prev').length, 1);
        equal(pag1.find('.last').length, 1);
        equal(pag1.find('.first').length, 1);
        equal(pag1.find('.page.active').length, 1);
        equal(pag1.find('.prev.disabled').length, 1);
        equal(pag1.find('.first.disabled').length, 1);
    });

    QUnit.test("Test custom classes appended for pagination", function () {
        pag1.twbsPagination('destroy');
        pag1.twbsPagination({
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
        pag1.twbsPagination('destroy');
        pag1.twbsPagination({
            totalPages: 2
        });
        equal(pag1.find('.page:eq(0)').text(), '1');
        equal(pag1.find('.next').text(), 'Next');
        equal(pag1.find('.prev').text(), 'Previous');
        equal(pag1.find('.first').text(), 'First');
        equal(pag1.find('.last').text(), 'Last');
    });

    QUnit.test("Test custom texts", function () {
        pag1.twbsPagination('destroy');
        pag1.twbsPagination({
            totalPages: 2,
            page: '[{{page}}]',
            first: '(first)',
            prev: '<<',
            next: '>>',
            last: '(last)[{{total_pages}}]'
        });
        equal(pag1.find('.page:eq(0)').text(), '[1]');
        equal(pag1.find('.next').text(), '>>');
        equal(pag1.find('.prev').text(), '<<');
        equal(pag1.find('.first').text(), '(first)');
        equal(pag1.find('.last').text(), '(last)[2]');
    });

})(window.jQuery);