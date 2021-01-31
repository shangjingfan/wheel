
// 事件委托函数封装
function on(eventType, element, selector, fn){
  if(!(element instanceof Element)){
    element = document.querySelector(element)
  }
  element.addEventListener(eventType, e=>{
    let t = e.target
    while(!(t.matches(selector))){
      if (element === t) {
        t = null
        break
      }
      t = t.parentNode
    }
    t && fn.call(t, e, t)
  })
}