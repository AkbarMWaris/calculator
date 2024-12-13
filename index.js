// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        const input = document.querySelector('input');
        input.value = input.value.slice(0, -1); // Removes the last character 
        string = input.value; // Update the string variable 
        }
      
    else if(e.target.innerHTML == 'ALT'){
         alert('Made with 💖 by AM Waris')
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

// function deleteLastChar() {
    
//   }