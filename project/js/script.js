let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let from = document.querySelector(".from");
let to = document.querySelector(".to");
let Result = document.querySelector(".result");
let tb = document.querySelector(".tb");

function createOption (x,y,z){
     let option = document.createElement("option");
     let contact = document.createTextNode(y);
     
     option.setAttribute("value",Num(z))
     option.appendChild(contact);
     x.appendChild(option);
}
function Num (x){
     return Number(x.replace(",",""));
}
for(x in data.rates){
     createOption(from,x,data.rates[x]);
     createOption(to,x,data.rates[x]);
   
}
function createTr (x){
     let noresult = document.querySelector(".noresult");
     let tr = document.createElement("tr");
     if(noresult){
          noresult.remove();
     }

      x.map(function (el){
         
          let td = document.createElement("td");
          let text = document.createTextNode(el);
     
          td.appendChild(text);
          tr.appendChild(td);
      });
      tb.appendChild(tr);
};

document.querySelector(".btn").addEventListener("click",function (e){
        e.preventDefault();

        //get state
        let a = input.value;
        let b = from.value;
        let c = to.value;

        //process state
        let first = a * b ;
        let second = first/c;
        let fromtText = a+from.options[from.selectedIndex].innerHTML;
        let toText = to.options[to.selectedIndex].innerHTML;
        let result = second.toFixed(2);
        let date = new Date().toLocaleString();
        let arr = [date,fromtText,toText,result];
        createTr(arr);
        localStorage.setItem("store",tb.innerHTML)

        //set state
        Result.innerHTML = result;
        input.value = "";
        input.focus();
        from.value = "";
        to.value = "1387.1";
      
});
(function (){
     if(localStorage.getItem("store")){
          tb.innerHTML = localStorage.getItem("store")
     }else{
          tb.innerHTML = `<tr class="noresult"><td colspan = 4>There is no Result !!</td></tr>`
     }
})();

function one (){
      console.log(from.options[from.selectedIndex].innerHTML)
}
function modeChange (){
      document.body.classList.toggle("night-mode");
      document.getElementById("sun").classList.toggle("fa-sun")
}