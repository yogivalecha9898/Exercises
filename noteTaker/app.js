window.addEventListener('load', ()=> {

    const value = document.querySelector('.notes')
    const but = document.querySelector('.submit')
    const par = document.querySelector('.cont')
    let counter = 0

    but.addEventListener('click', (e)=> {
        e.preventDefault()

        // console.log(value.value)
        // value.value = ""

        if(counter < 4) {
            let content = document.createElement('div')
            let para = document.createElement('p')
            let del = document.createElement('div')
            content.className = 'content'
            del.className = 'after'
            del.innerText = "del"
            para.innerText = value.value

            value.value = ""

            content.appendChild(para)
            content.appendChild(del)
            par.appendChild(content)
            counter++

            // const del = document.querySelector('.content::after')
            del.addEventListener('click', ()=> {
                if(counter > 0) {
                    par.removeChild(content)
                    counter--
                }
            })

            content.addEventListener('click', (event)=> {
                if(event.target != del) {
                    const modal = document.getElementById('modal')
                    modal.classList.add("show")
                    modal.children[0].children[0].innerText = para.innerText
                    
                    modal.addEventListener('click', (e)=> {
                        if(e.target !== document.querySelector('.container')) {
                            modal.classList.remove("show")
                        }
                    })
                }
            })
        } else {
            alert("The notes content is full delete some notes to empty the space")
        }
    })
})