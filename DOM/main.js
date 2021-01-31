
// 事件委托函数封装
function on(eventType, element, selector, fn){
    if(!(element instanceof Element)){
      element = document.querySelector(element)
    }
    console.log(element)
    element.addEventListener(eventType, e=>{
      let t = e.target
      while(!(t.matches(selector))){
        if (element === el) {
          el = null
          break
        }
        t = t.parentNode
      }
      fn(e)
    })
  }