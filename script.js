function search(){
let api="https://www.googleapis.com/books/v1/volumes?&key=AIzaSyD4V4ra5R9SNja734Rc2j74YI21kdKqIYY&q="
let search=document.getElementById("searchkey").value;
fetch(api+search)
.then((response)=>{
    return response.json();
})
.then((result)=>{
   
    display(result);
})
.catch((err)=>{
    console.log(err);
});}

function display(reslt){
    
   
    var res=document.querySelector(".row");
    let array=reslt.items;

    document.querySelector(".row").innerHTML = "";
    console.log(array)
array.forEach((element) => {
        
    let col =createMyElement("div","col-sm-12 col-lg-3");

    col.style.padding='5px';


    let card = createMyElement("div","card");

    let cardImg=createMyElement("img","card-img-top");

    cardImg.src=element.volumeInfo.imageLinks.thumbnail; 

    let cardBody= createMyElement("div","card-body");

    let h4=createMyElement("h4");

    h4.innerHTML = element.volumeInfo.title;

    let pTag= createMyElement("p","card-text");

    pTag.innerHTML = element.volumeInfo.authors;

   
    
    cardBody.append(h4,pTag);
    card.append(cardImg,cardBody);
    col.append(card);
    res.append(col);
   
});

function createMyElement(elemName,elemClass=""){
    let elem =document.createElement(elemName);
    elem.setAttribute("class",elemClass);
    
    return elem;
}

} 




