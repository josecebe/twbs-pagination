$(document).ready(function () {
    $('#pagination-demo').twbsPagination({
        totalPages: 35,
        visiblePages: 7,
        version: '1.1',
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
        version: '1.0'
    });

    $('#pagination-demo-v1_1').twbsPagination({
        totalPages: 15,
        version: '1.1'
    });

    $('#visible-pages-example').twbsPagination({
        totalPages: 35,
        visiblePages: 10,
        version: '1.1'
    });

});

