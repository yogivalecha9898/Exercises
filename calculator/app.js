const but1 = document.querySelector('.layer1')
const but2 = document.querySelector('.layer2')
const but3 = document.querySelector('.layer3')
const but4 = document.querySelector('.upper')
const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')
const changing = document.querySelector('.value')

let arr = new Array()
let count = 0
let count1 = 0
let a = new Array()
let flag = 0

but1.addEventListener('click', (e)=> {
    checkthetype(e.target.innerText)
})

but2.addEventListener('click', (e)=> {
    checkthetype(e.target.innerText)
})

but3.addEventListener('click', (e)=> {
    checkthetype(e.target.innerText)
})

but4.addEventListener('click', (e)=> {
    checkthetype(e.target.innerText)
})
const checkthetype = (value)=> {
    if(value === "+") {
        a[count1++] = value
        count++
    } else if(value === "-") {
        a[count1++] = value
        count++
    } else if(value === "/") {
        a[count1++] = value
        count++
    } else if(value === "=") {
        // console.log(`${cal(arr,a)} and ${arr}`)
        changing.innerText = cal(arr,a)
        arr = []
        count = 0
        a = []
        count1 = 0
    } else if(value === ".") {
        a[count1++] = value
        count++
        // No luck with the floating values
    } else if(value === "*") {
        a[count1++] = value
        count++
    } else if(value === "Del") {
        // flag = 1
        // Still trying to figure out how to make backspace effective
    } else if(value === "C") {
        changing.innerText = 0
        arr = []
        count = 0
        a = []
        count1 = 0
    } else if(value === "+/-") {
        a[count1++] = value
        count++
        // Don't know what this function does...
    } else {
        changing.innerText = value
        if(arr[count] === undefined)
            arr[count] = value 
                
        else {
            arr[count] += value
        }
            
        console.log(arr)
        console.log(a)
    }
}

const cal = (a1, a2)=> {
    let odd = a2.length
    let value = 0
    for(let i = 0; i < odd; i++) {
        switch(a2[i]) {
            case "+":
                value = (parseInt(a1[i]) + parseInt(a1[i+1]))
                break
            case "-":
                value = (parseInt(a1[i]) - parseInt(a1[i+1]))
                break
            case "/":
                value = (parseInt(a1[i]) / parseInt(a1[i+1]))
                break
            case "*":
                value = (parseInt(a1[i]) * parseInt(a1[i+1]))
                break
        }
        a1[i+1] = value
    }
    return value
}