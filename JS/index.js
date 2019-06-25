
//#region Login Page
// users = [
// {
//     name: 'Brandon Davis',
//     username: 'Bdavis90',
//     password: 'abc123'
//  },
//  {
//      name: 'Austin Lynes',
//      username: 'AustinLynes',
//      password: '123abc'
//  },
//  {
//      name: 'Andrew Brush',
//      username: 'ajb85',
//      password: 'cba321'
//  },
//  {
//      name: 'Davina Taylor',
//      username: 'lilvina',
//      password: '321cba'
//  }
// ]

// let logInBtn = document.querySelector('.login-btn')

// logInBtn.addEventListener('click', signIn())

// function signIn() {

//     let username = document.querySelector('.username').value
//     let password = document.querySelector('.password').value

//     for(let i = 0; i < users.length; i++) {
//         if(username === users[i].username && password === users[i].password) {
//             return alert('Welcome ' + users[i].name + '.')

//         }
//     }
//     alert('Incorrect username and/or password. Try again.')
// }
//#endregion

//#region Home Page

var page_buttons = document.querySelectorAll('.btn');

page_buttons.forEach(elm => {
    elm.addEventListener('mouseover', (e) => {
        elm.classList.add('hover');
        e.stopPropagation();
    });
    elm.addEventListener('mouseout',(e)=>{
        elm.classList.remove('hover');
        e.stopPropagation();
    });
});

//#endregion