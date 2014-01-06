(function () {

    var pag1 = $('#pagination');
    pag1.twbsPagination({
        totalPages: 30,
        startPage: 4,
        visiblePages: 5
    });

    test("Test 'equals' method", function () {
        var a1 = [5, 4, 5, 8, 7, 9, 1, 70];
        var a2 = [5, 4, 5, 8, 7, 9, 1, 70];
        var b = [1, 4, 8];
        var real = [1, 4, 8, 9, 0, undefined, 5000];
        ok(pag1.twbsPagination('equals', a1, a1), "Check the same array");
        ok(pag1.twbsPagination('equals', a1, a2), "Check separate equals array");
        ok(!pag1.twbsPagination('equals', a1, b), "Check not equal array");
        ok(!pag1.twbsPagination('equals', b, real), "Dirty test");
    });

    test( "Test 'getPages' method", function() {
        pag1.twbsPagination('init', {totalPages: 50, visiblePages: 10});
        var expected1 = {currentPage: 1, numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]};
        deepEqual(pag1.twbsPagination('getPages', 1), expected1);
        var expected2 = {currentPage: 10, numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]};
        deepEqual(pag1.twbsPagination('getPages', 10), expected2);
        var expected3 = {currentPage: 11, numeric: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]};
        deepEqual(pag1.twbsPagination('getPages', 11), expected3);
        var expected4 = {currentPage: 45, numeric: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]};
        deepEqual(pag1.twbsPagination('getPages', 45), expected4);
    });

})();