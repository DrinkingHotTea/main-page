const result = document.querySelector('.result_field')
const info = document.querySelector('.info')
const button = document.querySelector('.button')
const textField = document.querySelector('.text_field')

button.onclick = () => {
  let text = prompt('Число должно быть не более 10-ти')
  button.textContent = 'Сгенерировать'
  let z = -1
  
  setTimeout(() => {
    textField.textContent = 'Отлично, теперь ещё раз нажмите на кнопку для генерации'
  }, 400);
  
  button.onclick = () => {
    z++
    result.textContent = ''
    
    if (text > 0) {
      i = 0
      let interval = setInterval(() => {
        i++
        result.insertAdjacentText("beforeend", Math.floor(Math.random() * 10))
        
        if (text > 10) {
          clearInterval(interval)
          info.textContent = `Число слишком большое, начните заново.`
          
          if(z > 0) {
            info.textContent = `Число слишком большое, начните заново. (${z})`
          }
          result.textContent = ''
        }
        
        if (i == text) {
          clearInterval(interval)
          
          setTimeout(() => {
            info.textContent = 'Пароль готов! Если он вам не нравится, можете нажать ещё раз.'
          }, 200);
        }
      }, 200)
    } 
    
    else if (text < 0) {
      info.textContent = `Отрицательные числа не принимаются.`
      
      if(z > 0) {
        info.textContent = `Отрицательные числа не принимаются. (${z})`
      }
    } 
    
    else {
      info.textContent = `Что-то не так...`
      
      if(z > 0) {
        info.textContent = `Что-то не так... (${z})`
      }
    }
    
    if (z === 30) {
      alert('Да просто перезагрузие страницу! Не нужно постоянно долбить по этой кнопке!')
    }
  }
  
}

