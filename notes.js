// let main                 = document.createElement( "main"    ) ;
// let mainContainer        = document.createElement( "div"     ) ;
// let homeSection          = document.createElement( "section" ) ;
// let containerHomeSection = document.createElement( "div"     ) ;
// let nav                  = document.createElement( "nav"     ) ;
// let navContainer         = document.createElement( "div"     ) ;
// let navContainerLinks    = document.createElement( "div"     ) ;
// let listOfLinks          = document.createElement( "ul"      ) ;
// let containerSearchHome  = document.createElement( "div"     ) ;
// let stLink               = document.createElement( "li"      ) ;
// let ndLink               = document.createElement( "li"      ) ;
// let rdLink               = document.createElement( "li"      ) ;
// let thLink               = document.createElement( "li"      ) ;
// let fiLink               = document.createElement( "li"      ) ;
// let searchInp            = document.createElement( "input"   ) ;
// let searchIco            = document.createElement( "i"       ) ;
// let homeArticle          = document.createElement( "article" ) ;
// let containerHomeArticle = document.createElement( "div"     ) ;
// let containerTextHome    = document.createElement( "div"     ) ;
// let headerTextHome       = document.createElement( "div"     ) ;
// let circlesThemeHome     = document.createElement( "div"     ) ;
// let paragraphHome        = document.createElement( "div"     ) ;
// // let h1OfHeaderTextHome   = document.createElement( "h1"      ) ;
// // let pOfHeaderTextHome    = document.createElement( "p"       ) ;
// //##############################################################################
// mainContainer        .className   = "main-container"               ;
// navContainer         .className   = "container-nav-home"           ;
// navContainerLinks    .className   = "container-nav-home-links"     ;
// containerHomeSection .className   = "container-section-home"       ;
// containerSearchHome  .className   = "container-search-home"        ;
// searchIco            .className   = "fa-solid fa-magnifying-glass" ;
// containerHomeArticle .className   = "container-article-home"       ;
// headerTextHome       .className   = "header"                       ;
// circlesThemeHome     .className   = "circles-theme"                ;
// paragraphHome        .className   = "paragraph"                    ;
// homeSection          .id          = "home"                         ;
// searchInp            .id          = "search-box"                   ;
// stLink               .innerHTML   = `   <a href="#">
//                                         <img src="./assests/the-mad-hatter-logo.webp" 
//                                         alt="the-mad-hatter-logo">
//                                         </a>`                      ;
// ndLink               .innerHTML   = `<a href="#home">HOME</a>`     ;
// rdLink               .innerHTML   = `<a href="">ABOUT</a>`         ;
// thLink               .innerHTML   = `<a href="">SOLUTIONS</a>`     ;
// fiLink               .innerHTML   = `<a href="">CONTACT US</a>`    ;
// // h1OfHeaderTextHome   .innerHTML   = `THE MAD HATTER*`              ;
// // h1OfHeaderTextHome   .innerHTML   = `THE MAD HATTER*`              ;
// headerTextHome       .innerHTML   = `   <h1>THE MAD HATTER*</h1>
//                                         <p>UI/UX DESIGN 001</p>`   ;
// searchInp            .type        = "search"                       ;
// searchInp            .placeholder = "Search..."                    ;
// //##############################################################################
// document.body.append(
//     document.createComment("Start Main Container Of The Page."),main
// );
// main.appendChild(mainContainer);
// mainContainer.append(document.createComment("Start Section Home."),homeSection); //<!--Start Section Home.-->
// homeSection.appendChild(containerHomeSection);
// containerHomeSection.append(document.createComment("Start Nav bar"),nav,document.createComment("End Nav bar"),homeArticle);
// nav.appendChild(navContainer);
// navContainer.append(navContainerLinks,containerSearchHome);
// navContainerLinks.appendChild(listOfLinks);
// listOfLinks.append(stLink,ndLink,rdLink,thLink,fiLink);
// containerSearchHome.append(searchInp,document.createComment("Search icon from Font Awsome"),searchIco);
// homeArticle.appendChild(containerHomeArticle);
// containerHomeArticle.appendChild(containerTextHome);
// containerTextHome.append(headerTextHome,circlesThemeHome,paragraphHome)