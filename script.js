let countery = document.querySelector("input")
let btn = document.querySelector("#btn")
let girraj = document.querySelector("#girraj")
let counteryvalue = countery.value
function getcode(){
    fetch("https://flagcdn.com/en/codes.json")
    .then((response) => { return response.json() })
    .then((result => {
        console.log(result);
        showData(result)
    }))
    .catch((err) => { console.log(err) })
}
getcode()
btn.addEventListener("click", () => {
    if(counteryvalue === "" || counteryvalue == 0){
        console.log("it is 0")
    }
    else{
          
    }
})
function showData() {

}
showData()