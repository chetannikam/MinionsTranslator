var button=document.querySelector("#btn")
var inputarea=document.querySelector("#input-area")
var output=document.querySelector("#output-textarea")
// var outputarea=document.querySelector("#output-area")

function constructURL(url,user_input)
{
    return url+"?"+"text="+user_input;
}
function errorhandlerfun(para)
{ 
    console.log("Server having problem try after sometime:-"+para)
}
function what_happens_after_click()
{

var url="https://api.funtranslations.com/translate/minion.json";
var final_url=constructURL(url,inputarea.value)
fetch(final_url).then(response=>response.json()).then(json=>{var op=json.contents.translated;
    output.innerText=op;

}).catch(errorhandlerfun)
};
button.addEventListener("click",what_happens_after_click)

