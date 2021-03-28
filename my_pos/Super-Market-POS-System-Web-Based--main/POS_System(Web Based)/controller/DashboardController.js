
hideAll();

$("#dashboardform").css('display', 'block');
     
// home
$('#btnHome').click(function () {
    hideAll();
    $("#dashboardform").css('display', 'block');
     
});

// customer
$('#btnCustomer').click(function () {
    hideAll();
    $("#customerform").css('display', 'block');
    $("#txtCustomerId").focus(); 
});

// item
$('#btnItem').click(function () {
    hideAll();
    $("#itemform").css('display', 'block');
    $("#txtItemCode").focus();
});

// orders
$('#btnOrders').click(function () {
    hideAll();
    $("#orderform").css('display', 'block');
    generateOrderId();
    generateDate();
    loadCustomerId();
    loadItemCode();
     
});

// orderdetails
$('#btnOrderDetails').click(function () {
    hideAll();
    $("#order_detailsform").css('display', 'block');
     
});

function hideAll() {
    $("#dashboardform,#customerform,#itemform,#orderform,#order_detailsform").css('display', 'none');
}