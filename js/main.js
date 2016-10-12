$(document).ready(function () {
    $('#pagination-demo').twbsPagination({
        totalPages: "35",
        visiblePages: "7",
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });

    var $pagination = $('#dynamic-total-pages-pagination');
    var defaultOpts = {
        totalPages: 20,
        onPageClick: function (evt, page) {
            $('#dynamic-total-pages-content').text('Page ' + page);
        }
    };
    $pagination.twbsPagination(defaultOpts);

    $('#dynamicTotalForm').submit(function (evt) {
        evt.preventDefault();
        var totalPages = $(evt.target).find('.js-total-pages-value').val();
        if (!totalPages) {
            return;
        }
        var currentPage = $pagination.twbsPagination('getCurrentPage');
        $pagination.twbsPagination('destroy');
        $pagination.twbsPagination($.extend({}, defaultOpts, {
            startPage: currentPage,
            totalPages: totalPages
        }));
    });

    $('.sync-pagination').twbsPagination({
        totalPages: 20,
        onPageClick: function (evt, page) {
            $('#sync-example-page-content').text('Page ' + page);
        }
    });

    $('#alt-style-pagination').pagination({
        items: 20,
        itemOnPage: 8,
        currentPage: 1,
        cssStyle: '',
        prevText: '<span aria-hidden="true">&laquo;</span>',
        nextText: '<span aria-hidden="true">&raquo;</span>',
        onInit: function () {
            // fire first page loading
        },
        onPageClick: function (page, evt) {
            $('#alt-style-pagination-content').text('Page ' + page);
        }
    });
});

