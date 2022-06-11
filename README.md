## Crud Basics
### A simple crud app in dom
### Using Vanila css 


#### index.html
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>crud-basics-fcc</title>
    <!-- style css  -->
    <link rel="stylesheet" href="style.css">
    <!-- fontawesome icon cdn -->
    <script src="https://kit.fontawesome.com/017682a526.js" crossorigin="anonymous"></script>

</head>
<body>

    <h1>Social Media App</h1>

    <div class="container">
        <div class="left">
            <form action="" id="form">
                <label for="">Write Your Post Here</label>
                <br>
                <textarea name="" id="input" cols="30" rows="10"></textarea>
                <br><br>
                <div id="msg"></div>
                <button type="submit">Post</button>
            </form>
        </div>
        <div class="right">
            <h3>Your Post Here</h3>
            <p>Post Date: <span id="showDate"></span></p>
            <div id="posts">
                
                
               
            </div>
        </div>
    </div>


    
</body>
<!-- javascript file connect  -->
<script src="main.js"></script>
</html>
```


#### style.css
```javascript
body {
    font-family: sans-serif;
    margin: 0 50px;
}

.container {
    display: flex;
    gap: 50px;
}

#posts {
    width: 400px;
    /* border: 2px solid red; */
    box-shadow: 10px 10px 40px gray;
    border-radius: 5px;
    padding: 10px;
}

#posts>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.options {
    display: flex;
    gap: 25px;
}

i {
    cursor: pointer;
}

#msg {
    color: red;
}

#showDate {
    color: green;
}
```


#### main.js
```javascript
let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');
let showDate = document.getElementById('showDate');

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
        <i onClick='editPost(this)' class="fas fa-edit"></i>
        <i onClick='deletePost(this)' class="fas fa-trash-alt"></i>
    </span>
</div>`;


// reset the form
input.value = '';
}


let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

let currentDate = new Date();
showDate.innerText=currentDate.toLocaleDateString();

```