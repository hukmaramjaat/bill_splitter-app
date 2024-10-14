const paymentInput = document.querySelector('.paymentinput');
const peopleInput = document.querySelector('.people');
const generateBillbtn = document.querySelector('.btn-bill')
const eachPersonbill = document.querySelector('.eachPersonBill')
const totalBill = document.querySelector('.total')
const tipAmountoutput = document.querySelector('.tipAmount')
const customTipoutput = document.querySelector('.customtip')
const tipsContainer = document.querySelector('.tip-container')
const restBtn = document.querySelector('.reset-btn')
    
let selectedTip = 0;        
        
    
function generateBill(){
    const inpval = parseInt(paymentInput.value);
    const people = parseInt(peopleInput.value);
    const tip = inpval*(selectedTip/100)
    const parPersontotal = (inpval + tip)/people
    eachPersonbill.textContent = `₹${parPersontotal}`
    tipAmountoutput.textContent = `₹${tip}`
    totalBill.textContent = `₹${inpval + tip}`
}

tipsContainer.addEventListener('click',(e) =>{
    if(e.target !== tipsContainer){
        [...tipsContainer.children].forEach(tip => {
            tip.classList.remove('border')
        generateBillbtn.classList.add('open-menu')

        });
        selectedTip = parseInt(e.target.innerText)
        e.target.classList.add('border')
        customTipoutput.value = ''
    }
})

customTipoutput.addEventListener('input',() =>{
    selectedTip = parseInt(customTipoutput.value);
    [...tipsContainer.children].forEach(tip => {
        tip.classList.remove('border')
    });
    generateBillbtn.classList.add('open-menu')
})


restBtn.addEventListener('click',()=>{
    paymentInput.value = ''
    peopleInput.value = ''
    customTipoutput.value = ''
    eachPersonbill.textContent = `₹`
    tipAmountoutput.textContent = `₹`
    totalBill.textContent = `₹`;
    [...tipsContainer.children].forEach(tip => {
        tip.classList.remove('border')
    });
    restBtn.disabled = true;
    restBtn.classList.remove('open-menu')
    generateBillbtn.classList.remove('open-menu');
    [...tipsContainer.children].forEach(tip => {
        tip.classList.remove('open-menu')
    });
    peopleInput.disabled = true
    customTipoutput.disabled = true
})
paymentInput.addEventListener('input',()=>{
    if(paymentInput.value){
        [...tipsContainer.children].forEach(tip => {
            tip.classList.add('open-menu')
        });
        peopleInput.disabled = false
        peopleInput.classList.add('open-menu')
        customTipoutput.disabled = false
        customTipoutput.classList.add('open-menu')
    }else{
        [...tipsContainer.children].forEach(tip => {
            tip.classList.remove('open-menu')
        });
        peopleInput.disabled = true
        customTipoutput.disabled = true
    }
})
generateBillbtn.addEventListener('click',() => {
    if(paymentInput.value && peopleInput.value){

        generateBill()
        restBtn.disabled = false;
        restBtn.classList.add('open-menu')
    }
})