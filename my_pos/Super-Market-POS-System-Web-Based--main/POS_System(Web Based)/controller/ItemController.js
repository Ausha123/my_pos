// Events
// save
$('#btnItemAdd').click(function () {
        let itemCode=$('#txtItemCode').val();
        let itemName=$('#txtItemName').val();
        let qtyOnhand=$('#txtQtyOnHand').val();
        let unitprice=$('#txtUnitePrice').val();
     

    let result = saveItem(itemCode, itemName, qtyOnhand, unitprice);
    if(result)clearitem();
});

// update
$("#btnItemUpdate").click(function () {
    let itemCode=$('#txtItemCode').val();
        let itemName=$('#txtItemName').val();
        let qtyOnhand=$('#txtQtyOnHand').val();
        let unitprice=$('#txtUnitePrice').val();

    let option=confirm(`Do You Want to Update Item ? ID:${itemCode}`);
    if (option){
       let result= updateItem(itemCode, itemName, qtyOnhand, unitprice);
       if (result){
           alert("Item Successfully Updated !");
       }else{
           alert("Update Faild !");
       }
    }
     loadAllItems();
     clearitem();

});

// delete
$("#btnItemDelete").click(function () {
    let itemCode = $("#txtItemCode").val();
    let option=confirm(`Do You Want to Delete ? ID:${itemCode}`);
    if (option){
        let result=deleteItem(itemCode);
        if (result){
            alert("Item Successfully Deleted !");
        } else{
            alert("Delete Failed !")
        }

    }
    loadAllItems();
    clearitem();
});

// search
$("#txtItemCode").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let item = searchItem($(this).val());
        if (item != null) {
            $("#txtItemCode").val(item.getItemCode());
            $("#txtItemName").val(item.getItemName());
            $("#txtQtyOnHand").val(item.getQtyOnHand());
            $("#txtUnitePrice").val(item.getUnitPrice());
        } else {
            clearitem();
        }
    }
});


// ==================================================================================================
//Functions
// save item
function getAllItems() {
    return itemTable;
}
function saveItem(itemCode, itemName, qtyOnhand, unitprice) {
    let item = new ItemDTO(itemCode, itemName, qtyOnhand, unitprice);
    itemTable.push(item);// item aded

    loadAllItems();
    return true;   
}

// update customer
function updateItem(itemCode, itemName, qtyOnhand, unitprice) {
    let item = searchItem(itemCode);
    if (item != null) {
        item.setItemName(itemName)
        item.setQtyOnHand(qtyOnhand)
        item.setUnitPrice(unitprice);
        return true;
    } else {
        return false;
    }
    
}

// search customer
function searchItem(itemCode) {
    for (var i in itemTable) {
        if (itemTable[i].getItemCode() == itemCode) return itemTable[i];
    }
    return null;
}

//delete customer
function deleteItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        let indexNumber = itemTable.indexOf(item);
        itemTable.splice(indexNumber, 1);
        return true;
    } else {
        return false;
    }
}


// =====================================================================================================
// other functions
function loadAllItems() {
    let allItems = getAllItems();
    $('#tblItem').empty(); // clear all the table before adding for avoid duplicate
    for (var i in allItems) {
        let code = allItems[i].getItemCode();
        let name = allItems[i].getItemName();
        let qtyOnhand = allItems[i].getQtyOnHand();
        let unitprice = allItems[i].getUnitPrice();

        var row = `<tr><td>${code}</td><td>${name}</td><td>${qtyOnhand}</td><td>${unitprice}</td></tr>`;
        $('#tblItem').append(row);
    }
    $('#tblItem>tr').click(function () {
        let code=$(this).children('td:eq(0)').text();
        let name=$(this).children('td:eq(1)').text();
        let qtyOnhand=$(this).children('td:eq(2)').text();
        let unitprice=$(this).children('td:eq(3)').text();
        
        $("#txtItemCode").val(code);
        $("#txtItemName").val(name);
        $("#txtQtyOnHand").val(qtyOnhand);
        $("#txtUnitePrice").val(unitprice);
        
      
   });
}

// Reg Ex
let codeRegEx = /^(I00-)[0-9]{1,3}$/;
let descRegEx = /^[A-z| |0-9]{1,25}$/;
let qtyRegEx = /^[0-9]{1,4}$/;
let priceRegEx = /^\d{1,4}(?:\.\d{0,2})?$/;

$('#txtItemCode,#txtItemName,#txtQtyOnHand,#txtUnitePrice').on('keyup', function (event) {
    let input1 = $('#txtItemCode').val();
    let input2 = $('#txtItemName').val();
    let input3 = $('#txtQtyOnHand').val();
    let input4 = $('#txtUnitePrice').val();

    if (codeRegEx.test(input1)) {
        $('#txtItemCode').css('border', '2px solid green');
        $('#lblitemcode').text("");
        if (event.key === "Enter") {
            $('#txtItemName').focus();
        }
        if (descRegEx.test(input2)) {
            $('#txtItemName').css('border', '2px solid green');
            $('#lbldescription').text("");
            if (event.key === "Enter") {
                $('#txtQtyOnHand').focus();
            }
            if (qtyRegEx.test(input3)) {
                $('#txtQtyOnHand').css('border', '2px solid green');
                $('#lblqty').text("");
                if (event.key === "Enter") {
                    $('#txtUnitPrice').focus();
                }
                if (priceRegEx.test(input4)) {
                    $('#txtUnitPrice').css('border', '2px solid green');
                    $('#lblprice').text("");
                    enableButton2();
                    if (event.key === "Enter") {
                        $('#btnItemAdd').click();
                        $('#txtItemCode').focus();
                    }
                } else {
                    $('#txtUnitPrice').css('border', '2px solid red');
                    $('#lblprice').text("Required field. Pattern:-(100.00 or 100)");
                    $('#lblprice').css('color', 'red');
                    $('#lblprice').css('font-size', '8px');
                    disableButton2();
                }
            } else {
                $('#txtQtyOnHand').css('border', '2px solid red');
                $('#lblqty').text("Required field. Maximum 5");
                $('#lblqty').css('color', 'red');
                $('#lblqty').css('font-size', '8px');
                disableButton2();
            }
        } else {
            $('#txtItemName').css('border', '2px solid red');
            $('#lbldescription').text("Required field. characters and numbers Allowed.");
            $('#lbldescription').css('color', 'red');
            $('#lbldescription').css('font-size', '8px');
            disableButton2();
        }
    } else {
        $('#txtItemCode').css('border', '2px solid red');
        $('#lblitemcode').text("Required field. Pattern:-(I00-000)");
        $('#lblitemcode').css('color', 'red');
        $('#lblitemcode').css('font-size', '8px');
        disableButton2();
    }
});

function disableButton2() {
    $('#btnItemAdd').attr('disabled', 'disabled');
    $('#btnItemUpdate').attr('disabled', 'disabled');
}

function enableButton2() {
    $('#btnItemAdd').removeAttr('disabled');
    $('#btnItemUpdate').removeAttr('disabled');
}

$('#txtItemCode,#txtItemName,#txtQtyOnHand,#txtUnitePrice').on('keydown',function (event){
    if (event.key=="Tab"){
        event.preventDefault();
    }
});


function clearitem() {
        $('#txtItemCode').val("");
        $('#txtItemName').val("");
        $('#txtQtyOnHand').val("");
        $('#txtUnitePrice').val("");
}
