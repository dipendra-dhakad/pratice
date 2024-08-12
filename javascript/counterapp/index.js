const CountValue = document.querySelector('#counter');

const increment = ()=>{
    //get the value from ui
    let value = parseInt(CountValue.innerText);
    value =value+1;
    //set the value onto ui
    CountValue.innerText = value;
};

const decrement = ()=>{
    //get the value from ui
    let value = parseInt(CountValue.innerText);
    //update the value
    value = value-1;
    //set the value to the ui
    CountValue.innerText = value;
}