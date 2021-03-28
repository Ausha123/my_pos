function ItemDTO(code, name, qtyonhand, unitprice){
    var __code=code;
    var __name=name;
    var __qtyonhand=qtyonhand;
    var __unitprice=unitprice;

    this.getItemCode = function () {
        return __code;
    }
    this.getItemName = function () {
        return __name;
    }
    this.getQtyOnHand = function () {
        return __qtyonhand;
    }
    this.getUnitPrice = function () {
        return __unitprice;
    }

    this.setItemCode  = function (newCode) {
        __code = newCode;
    }
    this.setItemName = function (newName) {
        __name = newName;
    }
    this.setQtyOnHand = function (newQtyOnHand) {
        __qtyonhand = newQtyOnHand;
    }
    this.setUnitPrice = function (newUnitPrice) {
        __unitprice = newUnitPrice;
    }


}