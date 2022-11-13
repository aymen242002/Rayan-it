$(document).on('click', '#ham-butt', function (){
$('#ham-butt').fadeOut()
$('.menu-items').fadeIn()
$('#exit').css('display','grid')
$('#overly').fadeIn()
$('.header').fadeOut()
$('.header-mobile').fadeOut()
$('.main-container-mobile').fadeOut()
$('.main-container-mobile').fadeOut()
$('.footer').fadeOut()
})
$(document).on('click','#overly , #exit', function (){
$('.menu-items').fadeOut()
$('#exit').fadeOut()
$('#overly').fadeOut()
$('#ham-butt').fadeIn()
})
$(document).on('click','.card-button', function (){

   $('.contact-box').fadeIn()
  
  
    // console.dir(document.querySelector('.contact-box').style)

})
$(document).on('click','#exit-card', function (){

   $('.contact-box').fadeOut()

    // console.dir(document.querySelector('.contact-box').style)

})




$(document).on('click', '#en', function(){
    displayEn()
})
$(document).on('click', '#fr', function(){
    displayFr()
})

function displayEn () {

    var html
html =`

<div class="page-container">
      <!-- ****************************************
                      NAVBAR  
    **************************************** -->
      <nav>
        <div class="nav-container vw100">
          <div class="inner-nav grid center">
            <div class="logo grid center p10">
              <img src="./logo_rayan.png" alt="logo" />
            </div>
            <div class="nav-items grid center p10 ">
              <ul class="nav-ul gap30">
                <li class="nav-li small-text">
                  <a href="./index.html">HOME</a>
                </li>
                <li class="nav-li">
                  <a href="./pages/macintosh.html" target="_blank">MACINTOSH</a>
                </li>
                <li class="nav-li">
                  <a href="./pages/laptop.html" target="_blank">LAPTOP</a>
                </li>
                <li class="nav-li">
                  <a href="./pages/pc_de_bureau.html " target="_blank"
                    >DESKTOP PC</a
                  >
                </li>
                <li class="nav-li">
                  <a href="./pages/about.html " target="_blank">ABOUT</a>
                </li>
              </ul>
              <div class="languages text-center flex space-between gap20 p10">
                <div id="en" class="grid pointer p10">En</div>
                <div id="fr" class="grid pointer p10">Fr</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- ****************************************
                      NAVBAR-MOBILE
            ********************************************** -->
      <div class="nav-mobile p10 flex space-between">
        <div class="logo-mobile p10">
          <img src="./logo_rayan.png" alt="logo" />
        </div>
        <div class="flex space-between menu p10">
          <i id="ham-butt" class="fa-solid fa-bars ham"></i>
          <div class="menu-items text-center grid">
            <div class="MACINTOSH">MACINTOSH</div>
            <div class="LAPTOP">LAPTOP</div>
            <div class="PC DE BUREAU">PC DE BUREAU</div>
            <div class="MACINTOSH">ABOUT</div>
          </div>
          <div id="exit">
            <i class="fa-regular fa-circle-xmark big-text exit text-black"></i>
          </div>
        </div>
      </div>

      <!-- ****************************************
                      HEADER
            ********************************************** -->
      <div class="grid header p10">
        <div class="grid header-container p10">
          <div class="grid header-description p10">
            <div class="grid very-big-text text-white p10">
              Would you like to visit our products?
            </div>
            <div class="grid p10 text-white big-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum suscipit ducimus fugiat exercitationem cumque.
            </div>
            <div class="grid header-button center pointer">
              <a href="#linker"
                ><button
                  id="header-butt"
                  class="text-yellow big-text pointer p10"
                >
                  Explore our products
                </button></a
              >
            </div>
          </div>
          <div class="grid center header-img">
            <img src="./laptop.png" alt="" />
          </div>
        </div>
      </div>
      <!-- ****************************************
                      HEADER-MOBILE
            ********************************************** -->
      <div class="grid header-mobile p10">
        <div class="grid header-mobile-container p10">
          <!-- <div class="grid center header-img">
            <img src="./laptop.png" alt="" />
          </div> -->
          <div class="grid header-mobile-description p10">
            <div class="grid text-yellow p10" style="font-size: 45px">
              Would you like to visit our products?
            </div>
            <div class="grid p10 text-yellow">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum suscipit ducimus fugiat exercitationem cumque.
            </div>
            <div class="grid header-button-mobile p10 pointer center">
              <a href="#linker"
                ><button
                  id="header-butt"
                  class="text-white big-text pointer p10"
                >
                Explore our products
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- ****************************************
                      MAIN-CONTAINER
            ********************************************** -->

      
      <div id="linker" class="main-container grid p10">
        <div class="grid main-container-products p10 gap20">
          <div class="flex space-between">
          <div
            id="main-container-title"
            class="very-big-text text-yellow p10 center text-center">
            Explore our best products
          </div>
          <div class="card-button center">
            <i class="fa-solid fa-cart-shopping"></i>
              <div class="explanation">Clique to show card</div>
          </div>

          </div>

    
        <div class="mac p10 flex space-between">
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/mac1.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="title grid flex"><p3>Macintosh 2014</p3></div>
            
                <div class=" flex"><p>10$</p></div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                  Add to card
                </button>
              
              </div>
            </div>
          </div>
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/mac2.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Macintosh 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                  Add to card
                </button>
              </div>
            </div>
          </div>
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/mac3.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Macintosh 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="laptop p10 flex space-between">
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/laptop1.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20 w100">
                <div class="flex">Laptop 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white p10">
                <button id="add-butt" class="big-text pointer white">
                  Add to card
                </button>
              </div>
            </div>
          </div>

          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/laptop2.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Laptop 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                  Add to card
                </button>
              </div>
            </div>
          </div>
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/laptop3.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Laptop 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="dekstop_pc p10 flex space-between">
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/desktop1.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20 w100">
                <div class="flex">Dekstop PC 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white p10">
                <button id="add-butt" class="big-text pointer white">
                  Add to card
                </button>
              </div>
            </div>
          </div>

          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/desktop2.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Dekstop PC 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                  Add to card
                </button>
              </div>
            </div>
          </div>
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/desktop3.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Dekstop PC 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid lap p10"></div>
        <div class="grid desk-pc p10"></div>
      </div>
    </div>
    <div class="modal"></div>
    <!-- ****************************************
                      FOOTER
            ********************************************** -->
    <footer class="grid footer">
      <div class="grid footer-container">
        <div class="flex space-between">
          <div class="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="../pages/about.html" target="_blank">ABOUT</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>OUR PRODUCTS</h4>
            <ul>
              <li>
                <a href="../pages/macintosh.html" target="_blank">MACINTOSH</a>
              </li>

              <li><a href="../pages/laptop.html" target="_blank">LAPTOP</a></li>
              <li>
                <a href="../pages/pc_de_bureau.html" target="_blank"
                  >DESKTOP PC</a
                >
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>CONTACT US</h4>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>

              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
`
    $("body").html(html)


}


function displayFr () {

    var html
html =`

<div class="page-container">
      <!-- ****************************************
                      NAVBAR  
    **************************************** -->
      <nav>
        <div class="nav-container vw100">
          <div class="inner-nav grid center">
            <div class="logo grid center p10">
              <img src="./logo_rayan.png" alt="logo" />
            </div>
            <div class="nav-items grid center p10 ">
              <ul class="nav-ul gap30">
                <li class="nav-li small-text">
                  <a href="./index.html">HOME</a>
                </li>
                <li class="nav-li">
                  <a href="./pages/macintosh.html" target="_blank">MACINTOSH</a>
                </li>
                <li class="nav-li">
                  <a href="./pages/laptop.html" target="_blank">LAPTOP</a>
                </li>
                <li class="nav-li">
                  <a href="./pages/pc_de_bureau.html " target="_blank"
                    >PC DE BUREAU</a
                  >
                </li>
                <li class="nav-li">
                  <a href="./pages/about.html " target="_blank">ABOUT</a>
                </li>
              </ul>
              <div class="languages text-center flex space-between gap20 p10">
                <div id="en" class="grid pointer p10">En</div>
                <div id="fr" class="grid pointer p10">Fr</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- ****************************************
                      NAVBAR-MOBILE
            ********************************************** -->
      <div class="nav-mobile p10 flex space-between">
        <div class="logo-mobile p10">
          <img src="./logo_rayan.png" alt="logo" />
        </div>
        <div class="flex space-between menu p10">
          <i id="ham-butt" class="fa-solid fa-bars ham"></i>
          <div class="menu-items text-center grid">
            <div class="MACINTOSH">MACINTOSH</div>
            <div class="LAPTOP">LAPTOP</div>
            <div class="PC DE BUREAU">PC DE BUREAU</div>
            <div class="MACINTOSH">ABOUT</div>
          </div>
          <div id="exit">
            <i class="fa-regular fa-circle-xmark big-text exit text-black"></i>
          </div>
        </div>
      </div>

      <!-- ****************************************
                      HEADER
            ********************************************** -->
      <div class="grid header p10">
        <div class="grid header-container p10">
          <div class="grid header-description p10">
            <div class="grid very-big-text text-white p10">
              Voulez-vous visitez nos produits?
            </div>
            <div class="grid p10 text-white big-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum suscipit ducimus fugiat exercitationem cumque.
            </div>
            <div class="grid header-button center pointer">
              <a href="#linker"
                ><button
                  id="header-butt"
                  class="text-yellow big-text pointer p10"
                >
                  Découvrez nos produits
                </button></a
              >
            </div>
          </div>
          <div class="grid center header-img">
            <img src="./laptop.png" alt="" />
          </div>
        </div>
      </div>
      <!-- ****************************************
                      HEADER-MOBILE
            ********************************************** -->
      <div class="grid header-mobile p10">
        <div class="grid header-mobile-container p10">
          <!-- <div class="grid center header-img">
            <img src="./laptop.png" alt="" />
          </div> -->
          <div class="grid header-mobile-description p10">
            <div class="grid text-yellow p10" style="font-size: 45px">
            Voulez-vous visitez nos produits?
            </div>
            <div class="grid p10 text-yellow">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum suscipit ducimus fugiat exercitationem cumque.
            </div>
            <div class="grid header-button-mobile p10 pointer center">
              <a href="#linker"
                ><button
                  id="header-butt"
                  class="text-white big-text pointer p10"
                >
                Découvrez nos produits
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- ****************************************
                      MAIN-CONTAINER
            ********************************************** -->

      
      <div id="linker" class="main-container grid p10">
        <div class="grid main-container-products p10 gap20">
          <div class="flex space-between">
          <div
            id="main-container-title"
            class="very-big-text text-yellow p10 center text-center">
            Découvrez nos meilleurs produits
          </div>
          <div class="card-button center">
            <i class="fa-solid fa-cart-shopping"></i>
              <div class="explanation">Clique to show card</div>
          </div>

          </div>

    
        <div class="mac p10 flex space-between">
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/mac1.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="title grid flex"><p3>Macintosh 2014</p3></div>
            
                <div class=" flex"><p>10$</p></div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                  Ajouter au panier
                </button>
              
              </div>
            </div>
          </div>
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/mac2.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Macintosh 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                Ajouter au panier
                </button>
              </div>
            </div>
          </div>
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/mac3.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Macintosh 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="laptop p10 flex space-between">
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/laptop1.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20 w100">
                <div class="flex">Laptop 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white p10">
                <button id="add-butt" class="big-text pointer white">
                Ajouter au panier
                </button>
              </div>
            </div>
          </div>

          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/laptop2.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Laptop 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                Ajouter au panier
                </button>
              </div>
            </div>
          </div>
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/laptop3.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Laptop 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="dekstop_pc p10 flex space-between">
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/desktop1.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20 w100">
                <div class="flex">Dekstop PC 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white p10">
                <button id="add-butt" class="big-text pointer white">
                Ajouter au panier
                </button>
              </div>
            </div>
          </div>

          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/desktop2.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Dekstop PC 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                Ajouter au panier
                </button>
              </div>
            </div>
          </div>
          <div class="grid product-box-container p10">
            <div class="grid product-box p10 center p10">
              <img src="./img/desktop3.png" alt="" />
            </div>
            <div class="grid product-box-footer text-yellow big-text">
              <div class="flex space-between pt20">
                <div class="flex">Dekstop PC 2014</div>
                <div class="flex">10$</div>
              </div>
              <div class="grid add-button text-white">
                <button id="add-butt" class="big-text pointer white">
                Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid lap p10"></div>
        <div class="grid desk-pc p10"></div>
      </div>
    </div>
    <div class="modal"></div>
    <!-- ****************************************
                      FOOTER
            ********************************************** -->
    <footer class="grid footer">
      <div class="grid footer-container">
        <div class="flex space-between">
          <div class="footer-col">
            <h4>COMPAGNIE</h4>
            <ul>
              <li><a href="../pages/about.html" target="_blank">ABOUT</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>NOS PRODUITS</h4>
            <ul>
              <li>
                <a href="../pages/macintosh.html" target="_blank">MACINTOSH</a>
              </li>

              <li><a href="../pages/laptop.html" target="_blank">LAPTOP</a></li>
              <li>
                <a href="../pages/pc_de_bureau.html" target="_blank"
                  >PC DE BUREAU</a
                >
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>CONTACTEZ-NOUS</h4>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>

              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
`
    $("body").html(html)
}