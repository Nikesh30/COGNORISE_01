let select = document.querySelectorAll('.currency')
let button = document.getElementById('btn')
let input = document.getElementById('value')
fetch('https://api.frankfurter.app/currencies')
.then(res=>(res.json()))
.then(res=>display(res))

function display(res){
    let currency = Object.entries(res);
    for(i=0; i<currency.length; i++){
        let opt = `<option value="${currency[i][0]}">${currency[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    }

}

button.addEventListener('click', ()=>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputValue = input.value
    if(curr1 == curr2){
        alert("Choose differet currencies")
    }
    else{
        convert(curr1, curr2, inputValue)
    }
});

function convert(curr1, curr2, inputValue){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)
     .then(resp => resp.json())
    .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)[0];
})};
