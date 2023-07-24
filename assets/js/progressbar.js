const mainForm = document.getElementById("custom-progressbar");
const valueShow =  document.querySelector(".value-show");
const progressBar =  document.querySelector(".progressbar");

mainForm.onsubmit = (e)=>{
    e.preventDefault();
     const formData =  new FormData(mainForm);
     const data =  Object.fromEntries(formData);
     
     valueShow.innerHTML = data.num;
     let counter = data.num;
     
     progressBar.style.width = `100%`;
     const count = setInterval(()=>{
         counter--;
         valueShow.innerHTML = counter;       
         progressBar.style.width = `${(100 / data.num )* counter}%`;
         if (counter<=0) {
             clearInterval(count);
         }
     }
     ,1000)

     
} 

