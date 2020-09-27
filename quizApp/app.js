const questions = [
    {
        question: "Who do you think made this quiz?",
        a: "Yogi",
        b: "Yoig",
        c: "Yogii",
        d: "Yog",
        ans: "Yogi"
    },
    {
        question: "Where do you think the place Yakutsk lies?",
        a: "Russia",
        b: "Mongolia",
        c: "Turkey",
        d: "None of the above",
        ans: "Russia"
    },
    {
        question: "Which youtuber spent 30 days in snowy region of Russia instead of mainland Russia?",
        a: "Nomad Shubham",
        b: "Nomadic Indian",
        c: "Mountain Trekker",
        d: "None of the above",
        ans: "Nomad Shubham"
    },
    {
        question: "Who is the fourth Indian to go to Yakutsk?",
        a: "Shubham Kumar",
        b: "Deepanshu",
        c: "Varun vaghish",
        d: "Yogi Valecha",
        ans: "Shubham Kumar"
    }
]

let ques = document.querySelector('.question')
let opt_a = document.getElementById('a_answer')
let opt_b = document.getElementById('b_answer')
let opt_c = document.getElementById('c_answer')
let opt_d = document.getElementById('d_answer')
const but = document.querySelector('.submit')
const list = document.querySelector('.options')

window.addEventListener('load', ()=> {

    let counter = 0;
    let score = 0;

    const load = (counter)=> {
        reset()
        ques.innerText = questions[counter].question
        opt_a.innerText = questions[counter].a
        opt_b.innerText = questions[counter].b
        opt_c.innerText = questions[counter].c
        opt_d.innerText = questions[counter].d
    }

    const check = ()=> {
        let cor = undefined;
        [...list.children].forEach((el)=> {
            if(el.children[0].checked) {
                cor = el.children[1].innerText
            }
        })
        return cor
    }

    const reset = ()=> {
        [...list.children].forEach((el)=> {
            el.children[0].checked = false
        })
    }

    load(counter)

    but.addEventListener('click', ()=> {

        if(counter <= questions.length-1) {

            if(check() === questions[counter].ans) {
                score++
            }

            counter++
            load(counter)
        } else {
            but.children[0].innerText = "Submit"

            but.addEventListener('click', ()=> {
                alert(`The final result is ${score} out of ${questions.length}`)
                location.reload()
            })
        }
    })

})
