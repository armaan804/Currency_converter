const url = 'https://exchangerate-api.p.rapidapi.com/rapid/latest/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd1d9cd65a3msh91532be69bc8683p1e471fjsn289409105c29',
		'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com'
	}
};

let dropdown =document.querySelectorAll(".dropdown select");
let btn = document.querySelector(".button");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");
let msg = document.querySelector(".rate");

for(let select of dropdown){
    for(currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText=currcode;
        newoption.value = currcode; 
        // console.log(currcode);
		if(select.name ==="select-from" && currcode === "USD"){
			newoption.selected ="selected";
		}
		else if(select.name === "select-to" && currcode === "INR"){
			newoption.selected = "selected";
		}
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
        // console.log(evt.target);
    })
}
let updateflag = (element) =>{
    let currcode=element.value;
    let code = countryList[currcode];
    let newsrc = 'https://flagsapi.com/'+code+'/flat/64.png';
    let img = element.parentElement.querySelector("img");
    // console.log(newsrc);
    img.src = newsrc;
}
let getrate = async() =>{
    let amount = document.querySelector("#form input");
    let amtval = amount.value;
    // console.log(amtval);
    // console.log(fromcurr.value);
    // console.log(tocurr.value);
    let newurl = url + fromcurr.value;
    // console.log(newurl);
    let response = await fetch(newurl,options);
	let result = await response.json();
    console.log(result);
	let val = result["rates"][tocurr.value];
    let finalamt = Math.round(amtval * val * 10000) / 10000;
    msg.innerText = amtval+" " + fromcurr.value+ " = " + finalamt+" " + tocurr.value;
	msg.classList.remove("hide");
}
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    getrate();
})
