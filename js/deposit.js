document.getElementById('btn-deposit').addEventListener('click',
function(){
      const inputField = document.getElementById('input-field');
      const depositAmountString = inputField.value;
      const depositAmount = parseFloat(depositAmountString) ;
     
      const totalDeposit =  document.getElementById('total-diposit') ;
      const totalDepositString = totalDeposit.innerText;
      const newDepositAmount = parseInt(totalDepositString);
      
      const totalDepositAmount =  newDepositAmount + depositAmount
            totalDeposit.innerText=totalDepositAmount;

            inputField.value =''; 


 const balanceTotal = document.getElementById('balance-total');
     const balanceTotalString = balanceTotal.innerText;
     const previusbalanceTotal = parseFloat(balanceTotalString);

     const newTotalDeposit = previusbalanceTotal+ depositAmount ;
           balanceTotal.innerText = newTotalDeposit ;

           inputField.value =''; 
})