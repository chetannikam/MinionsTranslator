var button=document.querySelector("#btn")
var inputarea=document.querySelector("#input-area")
var output=document.querySelector("#output")
// var outputarea=document.querySelector("#output-area")
function what_happens_after_click()
{
// outputarea.innerHTML=inputarea.value
output.innerText=inputarea.value;
};
button.addEventListener("click",what_happens_after_click)

