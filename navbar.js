contenedor = document.getElementById('ctn-nav');
nav = document.createElement("nav");
nav.innerHTML = `<nav class="navi">
                    <a href="../index.html"> <img src="/images/ForeteenLogo2.png" class="logo-nav" alt=""> </a>
                    <div class="nav-bar"> 
                        <ul class="nav">
                            <a href="../index.html"><i id="home" class="fa-xl fa-solid fa-house-chimney-user"></i></a>
                            <li class="li"><a href="/productos/productos.html">Productos</a></li>
                            <li class="li"><a href="">Empresas</a></li>
                            <li class="li"><a href="/galery/galery.html">Diseños</a></li>
                            <li class="li"><a href="">Contacto</a></li>
                        </ul>
                    </div>
                </nav>`;
contenedor.appendChild(nav)


    