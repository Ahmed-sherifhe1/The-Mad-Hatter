let myNavBtn       = document.querySelector    ( "#navBtn"                   );
let myNavHCon      = document.querySelector    ( ".container-nav-home"       );
let myNavHLin      = document.querySelector    ( ".container-nav-home-links" );
let myLinks        = document.querySelector    ( "#links"                    );
let myLink         = document.querySelectorAll ( ".link"                     );
let mySerachCon    = document.querySelector    ( ".container-search-home"    );
let aboutSection   = document.querySelector    ( "#about"                    );
let headSecDes     = document.querySelectorAll ( "#headSecDes"         ) [ 0 ];
let headSecDes2    = document.querySelectorAll ( "#headSecDes"         ) [ 1 ];
let cont1          = document.querySelector    ( ".content-1"                );
let cont2          = document.querySelector    ( ".content-2"                );
let myView         = document.querySelector    ( "#view"                     );
let fuCon          = document.querySelector    ( "#fuCon"                    );
let myProjects     = document.querySelectorAll ( ".pro"                      );
let headSecOpinion = document.querySelector    ( "#headSecOpinion"           );
let comChs         = document.querySelectorAll ( ".ch"                       );
let contArtHom     = document.querySelector    ( ".container-article-home"   );
let conUs          = document.querySelector    ( "#conUs"                    );
let conUsSec       = document.querySelector    ( ".contact-us"               );
let artHom         = document.querySelector    ( "#art-hom"                  );
let homSec         = document.querySelector    ( "#homSec"                   );

conUs.onclick = function hideSection(){
    contArtHom.style.cssText="opacity:0;transition:0.9s ease;";
    artHom.classList.add("change-art");
    conUsSec.style.cssText="opacity:1;";
    homSec.children[0].classList.remove("active");
    conUs.children[0].classList.add("active");
}
homSec.onclick = function(){
    contArtHom.style.cssText="opacity:1;transition:0.9s ease;";
    artHom.classList.remove("change-art");
    conUsSec.style.cssText="opacity:0;"
    homSec.children[0].classList.add("active");
    conUs.children[0].classList.remove("active");
}
console.log(headSecDes);
myNavBtn.onclick=()=>{
    if(myNavBtn.classList[1]=="fa-bars"){
        myNavHLin.style.width="100%";
        setTimeout(function(){myNavHCon.style.cssText=`
            flex-direction:column;
            gap:13px;
            `;},499);
        myLinks.style.cssText=`
        flex-direction:column;`
        myLink.forEach(e=>{
            e.style.cssText=`
            display:block;
            margin:10px 0px;
            width:100%;
            text-align:center;
            transition:0.5s;`
        });
        mySerachCon.style.cssText=`width:100%;text-align:center;justify-content: center;`;
        myNavBtn.classList.remove("fa-bars");
        myNavBtn.classList.add("fa-xmark");
    }
    else{
        myNavHLin.style.width="50%";
        setTimeout(function(){myNavHCon.style.cssText=`
            flex-direction:row;
            gap:0px;
            `;},0);
        myLinks.style.cssText=`
        flex-direction:row;`
        myLink.forEach(e=>{
            e.style.cssText=`
            display:none;`});
        mySerachCon.style.cssText=`width:50%;justify-content:normal;`;
        myNavBtn.classList.remove("fa-xmark");
        myNavBtn.classList.add("fa-bars");
    }
};

// Start function to show Abot Section 
window.onscroll = function aboutAnimate(){
    let totalHeight = window.innerHeight/5*4;
    let topAboutSec = aboutSection.getBoundingClientRect().top;
    let topHeadSecDes = headSecDes.getBoundingClientRect().top;
    let topHeadSecDes2 = headSecDes2.getBoundingClientRect().top;
    let topCon1=cont1.getBoundingClientRect().top;
    let topCon2=cont2.getBoundingClientRect().top;
    let topFootSecDes = footSecDes.getBoundingClientRect().top;
    let viewTop =view.getBoundingClientRect().top;
    let headSecOpinionTop =headSecOpinion.getBoundingClientRect().top;
    let fuConTop = fuCon.getBoundingClientRect().top;
    myProjects.forEach((pro)=>{
        if(pro.getBoundingClientRect().top<totalHeight){
            pro.classList.add("show");
        }
        else{
            pro.classList.remove("show");
        }
    })
    comChs.forEach((ch)=>{
        if(ch.getBoundingClientRect().top<totalHeight){
            ch.classList.add("show");
        }
        else{
            ch.classList.remove("show");
        }
    })
    if(topAboutSec<totalHeight){
        aboutSection.classList.add("show");
    }
    else{
        aboutSection.classList.remove("show");
    }
    if(topHeadSecDes<totalHeight){
        headSecDes.classList.add("show");
    }
    else{
        headSecDes.classList.remove("show");
    }
    if(topHeadSecDes2<totalHeight){
        headSecDes2.classList.add("show");
    }
    else{
        headSecDes2.classList.remove("show");
    }
    if(topCon1<totalHeight){
        cont1.classList.add("show");
    }
    else{
        cont1.classList.remove("show");
    }
    if(topCon2<totalHeight){
        cont2.classList.add("show");
    }
    else{
        cont2.classList.remove("show");
    }
    if(topFootSecDes<totalHeight){
        footSecDes.classList.add("show");
    }
    else{
        footSecDes.classList.remove("show");
    }
    if(headSecOpinionTop<totalHeight){
        headSecOpinion.classList.add("show");
    }
    else{
        headSecOpinion.classList.remove("show");
    }
    if(fuConTop<totalHeight){
        fuCon.classList.add("show");
    }
    else{
        fuCon.classList.remove("show");
    }
    if(viewTop<totalHeight){
        myView.style.cssText = `animation: scrolldown alternate infinite 1.5s, appear 2s alternate forwards;`;
    }
    else{
        myView.style.cssText = `animation: scrolldown alternate infinite 1.5s;`;
    }
};
