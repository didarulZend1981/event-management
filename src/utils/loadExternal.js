// export function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     const s = document.createElement('script')
//     s.src = src
//     s.async = true
//     s.onload = resolve
//     s.onerror = reject
//     document.head.appendChild(s)
//   })
// }

// export function loadStyle(href) {
//   return new Promise((resolve, reject) => {
//     const l = document.createElement('link')
//     l.rel = 'stylesheet'
//     l.href = href
//     l.onload = resolve
//     l.onerror = reject
//     document.head.appendChild(l)
//   })
// }


export function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}

export function loadStyle(href) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`link[href="${href}"]`)) {
      resolve()
      return
    }
    const l = document.createElement('link')
    l.rel = 'stylesheet'
    l.href = href
    l.onload = resolve
    l.onerror = reject
    document.head.appendChild(l)
  })
}
