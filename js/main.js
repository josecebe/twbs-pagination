$(document).ready(function () {
    $('#pagination-demo').twbsPagination({
        totalPages: 35,
        visiblePages: 8,
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

});

