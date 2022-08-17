// const socket = io();
// let Name;
// let textarea = document.querySelector('#textarea');
// let messageArea = document.querySelector('.message__area')
// do{
//   Name =   prompt('please enter your name:')
// }
// while(!Name)
// //jab tak user name nhi dega while loop prompt deta rahega

// //keyup check the any key if pressed on keyboard
// textarea.addEventListener('keyup' ,(e)=>{
//     if(e.key=='Enter'){
//         sendMessage(e.target.value);
//     }
// })

// function sendMessage(message){
//     let msg = {
//         user: Name  ,
//         message : message

//     }
//     //append
//     appendMessage(msg,'outgoing')

//     //Send to server
//     //socket.emit = sends the msg(event)
//     socket.emit('message' ,msg)




// }
// function appendMessage(msg , type){
//     let mainDiv = document.createElement('div');
//     let className = type;
//     mainDiv.classList.add(className,'message')

//     let markup = `
//     <h4>${msg.user}</h4>
//     <p>${msg.message}</p>
//     `
//     mainDiv.innerHTML = markup;
//     messageArea.appendChild(mainDiv)
// }

// //recieve the msg

// socket.on('message',(msg)=>{
//  appendMessage('msg','incoming');
// })

const socket = io()
let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do {
    name = prompt('Please enter your name: ')
} while(!name)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 
socket.on(' messagetrim()', (msg) => {
    appendMessage(msg, 'incoming')
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}

