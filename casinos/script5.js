// Custom tier sort logic
$.fn.dataTable.ext.type.order['tier-custom-pre'] = function (data) {
    if (data.includes('S+<span class="diamond"')) return 1;
    if (data.includes('S+<span class="crown"')) return 2;
    if (data.includes('tier-s')) return 3;
    if (data.includes('tier-a')) return 4;
    if (data.includes('tier-b')) return 5;
    return 6; // fallback
};

console.log("✅ script5.js is loading");

$(document).ready(function () {
    const navbarHeight = $('.navbar').outerHeight() || 70;

    const table = $('#casinoTable').DataTable({
        responsive: true,
        pageLength: 200,
        lengthMenu: [25, 50, 100, 200],
        dom: 'ftip',
        scrollX: true,
        scrollCollapse: true,
        fixedHeader: {
            header: true,
            headerOffset: navbarHeight
        },
        columnDefs: [
            { targets: 1, type: 'tier-custom' }
        ],
        order: [[1, 'asc']],
        drawCallback: function (settings) {
            let api = this.api();
            let data = api.rows({ filter: 'applied' }).nodes();
            let visibleTotal = 0;

            data.each(function (row) {
                if (!$(row).hasClass('honeypot')) visibleTotal++;
            });

            let showing = api.rows({ page: 'current' }).nodes().to$().not('.honeypot').length;

            $('.dataTables_info').html(
                'Showing ' + showing + ' of ' + visibleTotal + ' entries'
            );
        }
    });

    // Enable column resizing
    $('#casinoTable').colResizable({
        liveDrag: true,
        gripInnerHtml: "<div class='grip'></div>",
        draggingClass: "dragging"
    });
});
