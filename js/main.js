$(document).ready(function () {
    $('#pagination-demo').twbsPagination({
        totalPages: "35",
        visiblePages: "10",
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });

    $('#visible-pages-example').twbsPagination({
        totalPages: 35,
        visiblePages: 10
    });

    $('.sync-pagination').twbsPagination({
        totalPages: 20,
        onPageClick: function (evt, page) {
            $('#sync-example-page-content').text('Page ' + page);
        }
    });

    $('#not-spa-demo').twbsPagination({
        totalPages: 15,
        visiblePages: 5,
        href: "?a=&page={{number}}&c=d",
        onPageClick: function (event, page) {
            $('#not-spa-demo-content').text('Page ' + page);
        }
    });

    $('#not-spa-demo-2').twbsPagination({
        totalPages: 15,
        visiblePages: 5,
        href: "#page={{pageNumber}}&c=d",
        hrefVariable: '{{pageNumber}}',
        onPageClick: function (event, page) {
            $('#not-spa-demo-content-2').text('Page ' + page);
        }
    });

    $('#page-ex-1').twbsPagination({
        totalPages: 5,
        visiblePages: 0,
        first: false,
        last: false,
        nextClass: '',
        prevClass: '',
        paginationClass: 'pager',
        onPageClick: function (event, page) {
            $('#page-ex-content-1').text('Page ' + page);
        }
    });

    $('#page-ex-2').twbsPagination({
        totalPages: 5,
        visiblePages: 0,
        first: false,
        last: false,
        prev: '&larr; Older',
        next: 'Newer &rarr;',
        nextClass: 'next',
        prevClass: 'previous',
        paginationClass: 'pager',
        onPageClick: function (event, page) {
            $('#page-ex-content-2').text('Page ' + page);
        }
    });

});

