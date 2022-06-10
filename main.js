//carte
let cartIcon = document.getElementById('carte-icon');
let cart = document.getElementById('cart');
let closedCarte = document.getElementById('closed-carte');
cartIcon.onclick =  () =>{
    cart.classList.add("active");
};
closedCarte.onclick =  () =>{
    cart.classList.remove("active");
};
if(document.readyState == 'loading')
{
    document.addEventListener('DOMcontentLoaded', ready)
}else{
    ready()
} 
function ready()
{
    var removeCarteButtons = document.getElementById("carte-remove")
    console.log(removeCarteButtons)
    for (var i = 0; i < removeCarteButtons.length; i++)
              {
                  var button = removeCarteButtons[i]
                  button.addEventListener('click', removeCarteItem)
              }
              var quantityInputs = document.getElementsByClassName('carte-quantité')
              for (var i = 0; i < quantityInputs.length; i++)
              {
                  var input = quantityInputs[i]
                  input.addEventListener("change",quantitychanged);
              }
}
function removeCarteItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updatetotal();

}
function quantitychanged(event)
{
    var input = event.target
    if(isNaN(input.value)|| input.value <= 0){
        input.value = 1
    }
    updatetotal();
}
//upatetotal//
function updatetotal()
{
    var cartcontent = document.getElementsByClassName("content")[0];
    var cartBoxes = cartcontent.getElementsByClassName("cart-box");
    var total=0;
    for(var i = 0; i < cartBoxes.length; i++)
    {
        var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("carte-price")[0];
var quantityElement = cartBox.getElementsByClassName("carte-quantité")[0];
var price=parseFloat(priceElement.innerText.replace("dt",""))
var quantité=quantityElement.value;
total = total +(price * quantité);
document.getElementsByClassName('total-price')[0].innerText = 'dt' + total;
 
}
}
