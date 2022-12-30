document.getElementById('widthraw-btn').addEventListener('click',
function(){
  const widthrawInputField = document.getElementById('widthraw-input');
  const widthrawInputString = widthrawInputField.value ;
  const widthrawInputAmount = parseFloat(widthrawInputString);
  

  const widthrawTotalField = document.getElementById('widthraw-amount');
  const widthrawAmountString = widthrawTotalField.innerText;
  const widthrawtotalAmount = parseFloat(widthrawAmountString);


  const widthrawBalanceTotal = widthrawInputAmount + widthrawtotalAmount
  widthrawTotalField.innerText=widthrawBalanceTotal;
  widthrawInputField.value='';


  const balanceTotalField = document.getElementById('balance-total');
  const balancetotalstringg = balanceTotalField.innerText;
  const newWidthrawAmount = parseFloat(balancetotalstringg);

  const minusDashboardField = newWidthrawAmount - widthrawInputAmount;
  balanceTotalField.innerText=minusDashboardField;
  
widthrawInputField.value='';
})