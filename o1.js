const About = document.querySelector(".Abouto2"),
Continer = document.querySelector(".Continer "),
content = document.querySelector(".content"),
h4 = document.querySelector(".text"),
text = document.querySelector("h4"),
but = document.querySelector(".btnt"),
but_top = document.querySelector(".but"),
About_D = document.querySelector(".About_D"),
Services = document.querySelector(".Services"),
Services_D = document.querySelector(".Services_D"),
h2 = document.querySelector("h2");











About.addEventListener( 'click' , function () {
    content.style.top = "65px";
    text.style.display = "none";
    setTimeout(() => {
        h4.style.display = "none";
        but.style.display = "none";
        but_top.style.display = "block";
        setTimeout(() => {
        About_D.style.display = "block";
        About_D.style.opacity = "1";
        h2.style.Color = "#fff";
        but_top.style.transform = "translateY(-20%)";  
        but_top.style.opacity = "1"; 
        
        }, 100);
       }, 220);
     
} );


Services.addEventListener( "click" , function () {


    About_D.style.display = "none";
    
    
    Services_D.style.display = "block";






} );