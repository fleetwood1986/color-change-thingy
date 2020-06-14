const container = document.getElementById("container");
const colors = ["red","blue","white","yellow","pink"];


const knife = () =>{
    const randomColor = Math.floor(Math.random()*5);

    container.style.backgroundColor = colors[randomColor];
}