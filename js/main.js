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

    $('#pagination-demo-v1_0').twbsPagination({
        totalPages: 15,
        version: '1.0',
        startPage: 5
    });

    $('#pagination-demo-v1_1').twbsPagination({
        totalPages: 15,
        startPage: 5
    });

    $('#visible-pages-example').twbsPagination({
        totalPages: 35,
        visiblePages: 10,
        version: '1.1'
    });

    $('.sync-pagination').twbsPagination({
        totalPages: 20,
        onPageClick: function (evt, page) {
            $('#sync-example-page-content').text('Page ' + page);
        }
    });

});

