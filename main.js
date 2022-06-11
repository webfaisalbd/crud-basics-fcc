let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    formValidation();
})

let formValidation = () =>{
    if(input.value === ''){
        msg.innerHTML = "Post can't be blank";
    }
    else {
        msg.innerHTML = "";
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data['text'] = input.value;
    console.log(data);
    createPost();
}

let createPost = () =>{
    posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
    </span>
</div>`;

input.value = '';
}