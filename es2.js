const films = [
    "./img/film1.jpg",
    "./img/film2.jpg",
    "./img/film3.jpg",
    "./img/film4.jpg",
    "./img/film5.jpg",
    "./img/film6.jpg",
    "./img/film7.jpg",
    "./img/film8.jpg",
    "./img/film9.jpg",
    "./img/film10.jpg",
    "./img/film8.jpg",
    "./img/film9.jpg",
    "./img/film10.jpg",
    "./img/film1.jpg",
    "./img/film2.jpg",
    "./img/film3.jpg",
    "./img/film4.jpg",
    "./img/film5.jpg",
    "./img/film6.jpg",
    "./img/film7.jpg",
    "./img/film8.jpg",
    "./img/film9.jpg",
    "./img/film10.jpg",
    "./img/film8.jpg",
    "./img/film9.jpg",
    "./img/film10.jpg",
    
    
]

class ShowFilms{
    constructor(items, pageSize){
        this.items = items
        this.pageSize = pageSize
    }
}

let pagination = new ShowFilms(films, 3)
let container = document.querySelector(".container")
const number = pagination.pageSize
const add = () => {
    let img = document.createElement("img")
    img.src = pagination.items[i]
    let width = 100 / number + "%"
    img.style.width = width
    container.appendChild(img)
}

    
for (i = 0; i < pagination.pageSize; i++){
    add()
}


const changePag = (event) =>{
    container.innerHTML = ''
    if(event.target.className === "successivo"){
        if(pagination.pageSize === number){
            pagination.pageSize === 0
            pagination.pageSize+=number 
            for(i=pagination.pageSize; i<pagination.pageSize+number; i++){
                add()
            }

        } else {
            pagination.pageSize+=number
                for(i=pagination.pageSize; i<pagination.pageSize+number; i++){
                    add()
            }
        }    
    } else {
        pagination.pageSize-=number
        for(i=pagination.pageSize; i<pagination.pageSize+number; i++){
            add()
        }
    }
    
}