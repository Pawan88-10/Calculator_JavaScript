let body = document.body
let section = document.createElement('section')
body.append(section)
let div = document.createElement('div')
section.append(div)
let h1 = document.createElement('h1')

//date showing on board
let date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
date = day + "/" + month + "/" + year
//time
let time = new Date();
time = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
h1.innerHTML = `Calculator with JavaScript`
h1.style.padding = '20px 40px 0'
h1.style.color = 'blue'
h1.style.textWrap = 'wrap'
h1.style.minWidth = '100px'
div.append(h1)
let div1 = document.createElement('div')
section.append(div1)
let label = document.createElement('label')
label.setAttribute('for', 'calling')
label.setAttribute('id', 'press')
div1.append(label)
let input = document.createElement('input')
div1.appendChild(input)
input.setAttribute('name', 'calling')
input.setAttribute('type', 'text')
input.setAttribute('id', 'calling')
input.readOnly = true; // input.setAttribute('readonly')
input.setAttribute('placeholder', 'Please Turn On')

let br = document.createElement('br')
div.append(br)
let table = document.createElement('table')
div1.append(table)
let footer = document.createElement('footer')
div1.append(footer)
footer.innerHTML = `Date : ${date} | Time : ${time}`

let caption = document.createElement('caption')
div.append(caption)
table.setAttribute('border', '1')
table.setAttribute('cellSpacing', '10px')
table.setAttribute('cellPadding', '10px')

//1st row
let tr1 = document.createElement('tr')
table.append(tr1)
let td1 = document.createElement('td')
let td2 = document.createElement('td')
let td3 = document.createElement('td')
let td4 = document.createElement('td')

td1.setAttribute('class', 'demo')
td2.setAttribute('class', 'demo')
td3.setAttribute('class', 'demo')
td4.setAttribute('class', 'demo')
tr1.appendChild(td1)
tr1.appendChild(td2)
tr1.appendChild(td3)
tr1.appendChild(td4)

td1.innerHTML = '%'
td2.innerHTML = `/`
td3.innerHTML = 'OFF'
td4.innerHTML = 'ON'

//2nd row
let tr2 = document.createElement('tr')
table.append(tr2)
let td5 = document.createElement('td')
let td6 = document.createElement('td')
let td7 = document.createElement('td')
let td8 = document.createElement('td')

td5.setAttribute('class', 'demo')
td6.setAttribute('class', 'demo')
td7.setAttribute('class', 'demo')
td8.setAttribute('class', 'demo')
tr2.appendChild(td5)
tr2.appendChild(td6)
tr2.appendChild(td7)
tr2.appendChild(td8)

td5.innerHTML = 'MRC'
td6.innerHTML = 'M-'
td7.innerHTML = 'M+'
td8.innerHTML = 'C'

//3rd row
let tr3 = document.createElement('tr')
table.append(tr3)
let td9 = document.createElement('td')
let td10 = document.createElement('td')
let td11 = document.createElement('td')
let td12 = document.createElement('td')

td9.setAttribute('class', 'demo')
td10.setAttribute('class', 'demo')
td11.setAttribute('class', 'demo')
td12.setAttribute('class', 'demo')
tr3.appendChild(td9)
tr3.appendChild(td10)
tr3.appendChild(td11)
tr3.appendChild(td12)

td9.innerHTML = '7'
td10.innerHTML = '8'
td11.innerHTML = '9'
td12.innerHTML = '*'

//4th row
let tr4 = document.createElement('tr')
table.append(tr4)
let td13 = document.createElement('td')
let td14 = document.createElement('td')
let td15 = document.createElement('td')
let td16 = document.createElement('td')

td13.setAttribute('class', 'demo')
td14.setAttribute('class', 'demo')
td15.setAttribute('class', 'demo')
td16.setAttribute('class', 'demo')
tr4.appendChild(td13)
tr4.appendChild(td14)
tr4.appendChild(td15)
tr4.appendChild(td16)

td13.innerHTML = '4'
td14.innerHTML = '5'
td15.innerHTML = '6'
td16.innerHTML = '-'

//4th row
let tr5 = document.createElement('tr')
table.append(tr5)

let td17 = document.createElement('td')
let td18 = document.createElement('td')
let td19 = document.createElement('td')
let td20 = document.createElement('td')

td17.setAttribute('class', 'demo')
td18.setAttribute('class', 'demo')
td19.setAttribute('class', 'demo')
td20.setAttribute('class', 'demo')
tr5.appendChild(td17)
tr5.appendChild(td18)
tr5.appendChild(td19)
tr5.appendChild(td20)

td17.innerHTML = '1'
td18.innerHTML = '2'
td19.innerHTML = '3'
td20.innerHTML = '+'
td20.setAttribute('rowSpan', '2')

//6th row
let tr6 = document.createElement('tr')
table.append(tr6)
let td21 = document.createElement('td')
let td22 = document.createElement('td')
let td23 = document.createElement('td')

td21.setAttribute('class', 'demo')
td22.setAttribute('class', 'demo')
td23.setAttribute('class', 'demo')
tr6.appendChild(td21)
tr6.appendChild(td22)
tr6.appendChild(td23)

td21.innerHTML = '0'
td22.innerHTML = '.'
td23.innerHTML = '='

//css applied
table.style.cssText = 'cursor:pointer;background-color:#00224D; border-radius:15px; padding:10px 0;'
td1.style.cssText = 'background-color:purple; color:gold;padding:10px 30px;border:1px solid gray;  text-align:center ; border-radius:15px;  box-shadow: 3px 3px 5px black'
td2.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gary;  text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td3.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid  gray;  text-align:center; border-radius:15px;box-shadow: 3px 3px 5px black'
td4.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid  gray;  text-align:center; border-radius:15px;box-shadow: 3px 3px 5px black'
td5.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid  gray;  text-align:center; border-radius:15px;box-shadow: 3px 3px 5px black'
td6.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid  gray;  text-align:center; border-radius:15px;box-shadow: 3px 3px 5px black'
td7.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid  gray;  text-align:center; border-radius:15px;box-shadow: 3px 3px 5px black'
td8.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid  gray;  text-align:center; border-radius:15px;box-shadow: 3px 3px 5px black'
td9.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid  gray;  text-align:center; border-radius:15px;box-shadow: 3px 3px 5px black'
td10.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td11.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td12.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td13.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td14.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td15.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td16.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td17.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td18.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td19.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td20.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:9px; font-size:30px;box-shadow: 3px 3px 5px black'
td21.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td22.style.cssText = 'font-size:bolder;background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
td23.style.cssText = 'background-color:purple; color:gold;padding:10px 25px;border:1px solid gray; text-align:center ; border-radius:15px;box-shadow: 3px 3px 5px black'
input.style.cssText = 'height:40px;width:355px; margin: 10px 0; background-color:black;color:black; border-radius:5px '
div1.style.cssText = 'position:relative; border:1px solid black;height:420px;width:368px;padding:20px; background-color:purple; border-radius:5%'
footer.style.cssText = 'border-radius:15px; margin:10px; text-align:center; color: silver; font-size:16px'
//function
let press = document.getElementById('press')
let demo = document.getElementsByClassName('demo')


//calculator working from here
let data = ''
let inp = document.querySelector('input')
// document.querySelector('input').value = string // it will store value inside input tag
// target keyword only target button which is pressed
//eval() method in which we want to perform operation(+,-,*,/) on operand sothat it work on it
let arr = [td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, td12, td13, td14, td15, td16,
    td17, td18, td19, td20, td21, td22, td23]

//arr for traversing one by one and check it

arr.forEach(element => {
    try {
        element.addEventListener('click', (e) => {
          
            //audio attach
            let audio = new Audio("sound-1-167181.mp3")
            audio.play();
            // audio.setAttribute('src')

            if (e.target.innerHTML == '=') {
                data = eval(data)
                inp.value = data
                console.log(inp.value);
            }
            else if (e.target.innerHTML == 'C') {
                data = ''
                inp.value = data
            }
            else if (e.target.innerHTML == 'OFF') {
                // data = 'Calculator is OFF'
                // inp.value = data
                audio = new Audio("sound-alert-device-turn-on-turn-off-win-done-chakongaudio-174892.mp3")
                audio.play();
                setTimeout((e) => {
                    input.style.backgroundColor = 'black'
                    input.style.color = 'black'
                }, 10)
            }
            else if (e.target.innerHTML == 'ON') {
                audio = new Audio("sound-alert-device-turn-on-turn-off-win-done-chakongaudio-174892.mp3")
                audio.play();
                input.setAttribute('placeholder', ' ')
                data = 'Calculator is ON'
                inp.value = data
                input.style.backgroundColor = 'teal'
                input.style.color = 'white'
                setTimeout((e) => {
                    data = ''
                    inp.value = data
                }, 1000)

                if (input.style.backgroundColor == 'teal') {
                    data = ''
                    inp.value = data
                    console.log(inp.value);
                }
                // inp.value = e.target.innerHTML
            }
            else if (e.target.innerHTML == 'MRC') {
                audio = new Audio("system-error-notice-132470.mp3")
                audio.play();
                data = "It's on working"
                inp.value = data
            }
            else if (e.target.innerHTML == 'M+') {
                audio = new Audio("system-error-notice-132470.mp3")
                audio.play();
                data = "It's on working"
                inp.value = data
            }
            else if (e.target.innerHTML == 'M-') {
                audio = new Audio("system-error-notice-132470.mp3")
                audio.play();
                data = "It's on working"
                inp.value = data
            }
            else {
                data += e.target.innerHTML
                // data = "Operation doesn't work with string"
                inp.value = data
                console.log(inp.value);

            }
        });

    } catch (error) {
        console.log("error is founded");
    }

});

//button for color changer
let button = document.createElement('button')
div1.append(button)
button.setAttribute('id', 'btn')
button.style.cssText = ' bottom:5px; right:20px;'
button.style.border = '1px solid gray'
button.style.position = 'absolute'
button.style.padding = '10px 10px'
button.style.backgroundColor = 'red'
// button.style.inlineSize = '15%' //min-content also provide it
button.style.borderRadius = '50%'
button.innerHTML = 'red'
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let audio = new Audio("sound-1-167181.mp3")
    audio.play();
    if (btn.style.backgroundColor == 'red') {
        btn.style.backgroundColor = 'red'
        div1.style.backgroundColor = 'red'
        table.style.backgroundColor = 'red'
        btn.innerHTML = 'green'
        btn.style.backgroundColor = 'green'
    }
    else if (btn.style.backgroundColor == 'green') {
        div1.style.backgroundColor = 'green'
        table.style.backgroundColor = 'green'
        btn.innerHTML = 'yellow'
        btn.style.backgroundColor = 'yellow'
    }
    else if (btn.style.backgroundColor === 'yellow') {
        div1.style.backgroundColor = 'yellow'
        table.style.backgroundColor = 'yellow'
        btn.innerHTML = 'gold'
        btn.style.backgroundColor = 'gold'
    }
    else if (btn.style.backgroundColor === 'gold') {
        div1.style.backgroundColor = 'gold'
        table.style.backgroundColor = 'gold'
        btn.innerHTML = 'violet'
        btn.style.backgroundColor = 'violet'
    }
    else if (btn.style.backgroundColor === 'violet') {
        div1.style.backgroundColor = 'violet'
        table.style.backgroundColor = 'violet'
        btn.innerHTML = 'purple'
        btn.style.backgroundColor = 'purple'
    }
    else {
        footer.style.padding = '20px  5px'
        footer.style.color = 'navy'
        div1.style.backgroundColor = 'purple'
        table.style.cssText = 'background-color:#00224D;'
        btn.innerHTML = 'red'
        btn.style.backgroundColor = 'purple'

        if (btn.style.backgroundColor == 'purple') {
        btn.style.backgroundColor = 'purple'
        div1.style.backgroundColor = 'purple'
        table.style.backgroundColor = 'purple'
        btn.innerHTML = 'green'
        btn.style.backgroundColor = 'green'
    }
    else if (btn.style.backgroundColor == 'green') {
        div1.style.backgroundColor = 'green'
        table.style.backgroundColor = 'green'
        btn.innerHTML = 'yellow'
        btn.style.backgroundColor = 'yellow'
    }
    else if (btn.style.backgroundColor === 'yellow') {
        div1.style.backgroundColor = 'yellow'
        table.style.backgroundColor = 'yellow'
        btn.innerHTML = 'gold'
        btn.style.backgroundColor = 'gold'
    }
    else if (btn.style.backgroundColor === 'gold') {
        div1.style.backgroundColor = 'gold'
        table.style.backgroundColor = 'gold'
        btn.innerHTML = 'violet'
        btn.style.backgroundColor = 'violet'
    }
    else if (btn.style.backgroundColor === 'violet') {
        div1.style.backgroundColor = 'violet'
        table.style.backgroundColor = 'voilet'
        btn.innerHTML = 'purple'
        btn.style.backgroundColor = 'purple'
    }
    else{
        console.log("that's all")
    }
    }
})
