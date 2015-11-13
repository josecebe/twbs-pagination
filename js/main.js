$(document).ready(function () {
    $('#pagination-demo').twbsPagination({
        totalPages: "35",
        visiblePages: "7",
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
});

