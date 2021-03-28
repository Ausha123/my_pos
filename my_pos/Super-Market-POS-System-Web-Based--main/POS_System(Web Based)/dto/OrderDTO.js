function OrderDTO(orderId, date, cusId, orderDetail, discount){
    var __orderId=orderId;
    var __date=date;
    var __cusId=cusId;
    var __orderDetail;
    var __discount;
     
    this.getOrderId = function () {
        return __orderId;
    }
    this.getDate = function () {
        return __date;
    }
    this.getCusId = function () {
        return __cusId;
    }
    this.getorderDetail = function (){
        return  __orderDetail;
    }
    this.getdiscount = function (){
        return __discount;
    }


    this.setOrderId  = function (newOrderId) {
        __orderId = newOrderId;
    }
    this.setDate = function (newDate) {
        __date = newDate;
    }
    this.setCusId = function (newCusId) {
        __cusId = newCusId;
    }
    this.setorderDetail = function (newOrderdetail){
        __orderDetail = newOrderdetail;
    }
    this.setdiscount = function (newDiscount){
        __discount = newDiscount;
    }
     

}