 window.onload=function(){
    const btnStart = document.querySelector("#start");
    const btnStop = document.querySelector("#stop");
    const btnReset = document.querySelector("#reset");
    const blockSave = document.querySelector("#block-save");
    const btnClear = document.querySelector("#clear");
   
    //----------   
    let a = 1;
    let timer;
    let b = document.getElementById("bd")
    let p = document.getElementById("timer");   
    let arr = [];
    //----------
    
      function createElement(text){
      let save = document.createElement("div");
      save.classList.add("infodiv")
      save.textContent=text;
          blockSave.appendChild(save);
      }
        
            function myTimer(){
            p.classList.add("blink")
            p.innerHTML=`${a} s`;
            let min = Math.floor(a/60)
      a++;
      if(a>=60){
          p.innerText=`${min}min:${a-(min*60)}s`;
          p.style.fontSize=20+'px';
      }
      
      }
        //---------------
    
     btnStop.addEventListener("click", function () {
          btnStop.disabled = true;
   btnStart.disabled = false;
   btnStart.classList.remove('disabled');
   btnStop.classList.add('disabled');
     let inp = document.querySelector("#inp");
     let info = inp.value;
     inp.value = '';
         clearInterval(timer);
         p.classList.remove("blink");                
         createElement(`${info} - ${a-1}s`)
              
// ------------------
    //  let storage = document.querySelector(".storage");
         
       
 let allOut = document.querySelectorAll(".infodiv");       
 allOut.forEach((item) => {
 
           arr.push( item.textContent);
            //  let localValue = localStorage.getItem("myKey");
            //  storage.innerText = localValue;
    //  localStorage.setItem("myKey", item.textContent.toString());
             
     localStorage.setItem("myKey", arr);
    
         });
         
         
          
// ---------------

     });
    
     //-----------
    //  let storage = document.querySelector(".storage");
    
     btnReset.addEventListener("click", function(){
     let inp = document.querySelector("#inp");
     inp.value = '';
    
         clearInterval(timer);
         a = 0;
         p.classList.remove("blink");
        
         p.innerText = a + ' s';
       
     })
           
       // -------
       
    btnStart.addEventListener("click", function(){
   btnStop.disabled = false;
   btnStart.disabled = true;
        btnStart.classList.add('disabled');
   btnStop.classList.remove('disabled');

       timer = setInterval(myTimer, 1000);
    });
   
    //---------
    
    btnClear.addEventListener("click", function(){
      let allOut = document.querySelectorAll(".infodiv");
     let storage = document.querySelector(".storage");

      allOut.forEach((item) => {
        // ------
        item.remove();
        // -----
      });
      // ---------
        
        let localValue = localStorage.getItem("myKey");
        arr.push(localValue)
        let x = arr.length;
        storage.innerText = arr[0];
       
    })
    
   
}