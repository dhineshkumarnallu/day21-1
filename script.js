let cont=document.getElementById('container');
let H1=document.createElement('h1');
H1.innerText="Dog Image";
let butn=document.createElement('button');
butn.setAttribute('class','btn btn-secondary');
butn.type="reset";
butn.innerText="Random dog image";
butn.onclick=function(){
    dogim();
}
let card=document.createElement('div');
card.setAttribute('id','image');

cont.append(H1,butn,card);
let url="https://dog.ceo/api/breeds/image/random";


async function dogim(){
    card.innerHTML="";
try{
    let res=await fetch(url);
     let res1=await res.json();
    
     let img=document.createElement('img');
     img.src=res1.message;
    card.append(img);
        
        
    }

catch{
    console.log(error);
}

}