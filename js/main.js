$(document).ready(function () {
    $('#pagination-demo').twbsPagination({
        totalPages: 35,
        visiblePages: 7,
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });

    $('#navigation').affix({
        offset: {
            top: 200
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

});

