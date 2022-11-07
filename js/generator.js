let arr2 = [1,2,3,4,5,6,7,8,9,0]
let arr3 =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let arr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let arr5 = ['!', '@', '#', '$', '%', '&', '*', '_', '+', '=', '-', '.', ',']

document.getElementById('param1').oninput = function(){
  // console.log(this.value)
  document.getElementById('password-length').innerHTML = this.value
}

generatePass()

document.getElementById('generator').onclick = generatePass;

function generatePass(){
  var result = []
  if(document.getElementById('param2').checked){
    result = result.concat(arr2)
  }
  if(document.getElementById('param3').checked){
    result = result.concat(arr3)
  }
  if(document.getElementById('param4').checked){
    result = result.concat(arr4)
  }
  if(document.getElementById('param5').checked){
    result = result.concat(arr5)
  }

  if( result.length === 0){
    document.getElementById('out').innerHTML = '<h4> Выберите минимум одно поле </h4>'
  }
  else {
    result.sort(() => Math.random() - 0.5) //peremeshivaet
    document.getElementById('out').innerHTML = ''
  
    for (let k=0; k<6; k++){
      let pass = ''
      let passLength = document.getElementById('param1').value
    
      for( let i =0; i< passLength; i++){
        pass += result[randomInteger(0, result.length-1)]
    }
  
    //console.log(pass)
    document.getElementById('out').innerHTML += '<p>' + pass + '</p>'
  
    }
    
    function randomInteger(min, max) {
      // получить случайное число от (min-0.5) до (max+0.5)
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }

  }
  
    
  
  
}
