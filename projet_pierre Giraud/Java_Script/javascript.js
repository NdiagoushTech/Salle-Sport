
 window.addEventListener("load",function(){
    alert("Bienvenue chez Ndiagoush");
});
const photo=["cyber.jpg","entree-direction.webp","esp.webp","gainde.jpg","pexels-caleboquendo-3018077.jpg","salle.jpg","Sonatel.jpg"];
let index=0;
const next=document.getElementById("next");
next.addEventListener("click",function(){
index++;
if(index>photo.length-1){
    index=0;
}
document.getElementById("album").src=photo[index];
});
const prev=document.getElementById("prev");
prev.addEventListener("click",function(){
    index--;
     if(index<0){
        index=photo.length-1;
    }
    document.getElementById("album").src=photo[index];
});