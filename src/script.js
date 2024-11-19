


function Calculate(){
    let height  = parseFloat(document.querySelector('.height').value)
    let weight  = parseFloat(document.querySelector('.weight').value)
    let bmiresult = document.querySelector('.bmi')
    let result = document.querySelector('.result')
     p= document.createElement('span')
    let bmi = weight / (height * height)
    if(bmi<18.5){
        p.textContent = 'Underweight'
        p.style.color = 'blue'
        p.style.fontSize ='20px'
        p.style.fontWeight ='bold'
        result.appendChild(p)
        bmiresult.textContent = bmi.toFixed(2)
        return
    }
    else if(bmi>18.5 && bmi<24.5){
        p.textContent = 'Normal Weight'
        p.style.color = 'blue'
        p.style.fontSize ='20px'
        p.style.fontWeight ='bold'
        result.appendChild(p)
        bmiresult.textContent = bmi.toFixed(2)
        return
        
    }
    else if(bmi>24.5 && bmi<30){
        p.textContent = ' Obese'
        p.style.color = 'blue'
        p.style.fontSize ='20px'
        p.style.fontWeight ='bold'
        result.appendChild(p)
        bmiresult.textContent = bmi.toFixed(2)
        return
    }
    else if(bmi>30 && bmi<35){
        p.textContent = 'Very Obese'
        p.style.color = 'blue'
        p.style.fontSize ='20px'
        p.style.fontWeight ='bold'
        result.appendChild(p)
        bmiresult.textContent = bmi.toFixed(2)
        return
    }
    else{
        p.textContent = 'OverWeight '
        p.style.color = 'blue'
        p.style.fontSize ='20px'
        p.style.fontWeight ='bold'
        result.appendChild(p)
        bmiresult.textContent = bmi.toFixed(2)
        return
    }
  

}