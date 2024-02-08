let tname=document.querySelector("#tname");
let desp=document.querySelector("#desp");
let priority=document.querySelector("#priority");

let btn=document.querySelector("#btn");

btn.addEventListener("click", () => {
  
    let newdata = {
      tname:tname.value,
      desp:desp.value,
      priority:priority.value
    
    };
  
    let ist = localStorage.getItem("Ulist"); 
  
    ist = ist === null ? [] : JSON.parse(ist);  
      ist.push(newdata);
      localStorage.setItem("Ulist", JSON.stringify(ist));
      alert("Registration successful");
      console.log(newdata);
});
  