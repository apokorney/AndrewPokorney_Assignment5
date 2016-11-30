/**
 * Created by apoko_000 on 11/29/2016.
 */
vm.pageHeader = {
    title: ' Bid page'
};
vm.onSubmit = function(){
    console.log("you clicked submit");
    console.log(vm.formData);
    $http.post("/api/items/" + vm.itemid + "/bids", vm.formData);
    vm.message = "You've sent a bid";

};