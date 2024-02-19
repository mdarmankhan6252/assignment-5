
let decreaseSetNum = 7;
let increaseSetNum = 1;
let totalNum = 0;
let clickCount = 0;
const setNumbers = document.querySelectorAll('.setNumber');
for(i = 0; i < setNumbers.length; i++){
   const setNumber = setNumbers[i];
   setNumber.addEventListener('click', function(){     

      const title = setNumber.innerText;
      setNumber.classList.add('bg-[#1DD100]');

      const titleContainer = document.getElementById('titleContainer');
      const div1 = document.createElement('div');
      titleContainer.appendChild(div1)
      
      const p1 = document.createElement('p');
      p1.innerText = title;
      div1.appendChild(p1)
      const p2 = document.createElement('p');
      p2.innerText = 'Economy';
      div1.appendChild(p2)
      const p3 = document.createElement('p');
      p3.innerText = '550';
      div1.appendChild(p3);

      let total = document.getElementById('totalPrice');
      totalNum = totalNum + 550;
      total.innerText = totalNum;

      const decreaseSet = document.getElementById('decreaseSet');
      decreaseSet.innerText = decreaseSetNum;
      decreaseSetNum--;
      
      const increaseSet = document.getElementById('increaseSet');
      increaseSet.innerText = increaseSetNum;
      increaseSetNum++;

      //alert part.

      clickCount++;

      if (clickCount > 4) {
         alert('Wait bro');
         setNumber.disabled = true;
     }

      

   })
}

function apply(){
   const getCouponValue = document.getElementById('getCouponValue').value;
   let grandTotalValue = document.getElementById('grandTotalValue');
   const applyHidden = document.getElementById('applyHidden');

   if(getCouponValue === "NEW15"){
      const grandTotal = totalNum - (totalNum * 0.15);
      console.log(grandTotal)
      grandTotalValue.innerText = grandTotal.toFixed(1);
      applyHidden.classList.add('hidden')
   }else if(getCouponValue === "Couple20"){
      if(totalNum >= 1100){
         const grandTotal = totalNum - (totalNum * 0.20);
      console.log(grandTotal)
      grandTotalValue.innerText = grandTotal.toFixed(1);
      applyHidden.classList.add('hidden')
      }else{
         alert('Vai toi age biyea kor!')
      }
   }else{
      alert('Invalid Coupon!')

   }
}

function nextWindow(){
   const section = document.getElementById('section');
   const section2 = document.getElementById('section2')
   section.classList.add('hidden');
   section2.classList.remove('hidden');
}
function Continue(){
   const section = document.getElementById('section');
   const section2 = document.getElementById('section2')
   section.classList.remove('hidden');
   section2.classList.add('hidden');
}
