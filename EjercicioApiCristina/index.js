if (window.File && window.FileReader && window.FileList) {
    console.log('Todas las APIs soportadas');
    } else {
    alert('La API de FILE no es soportada en este navegador.');
    }

    function handleFileSelect(evt) {
        var files = evt.target.files; 
        var padre = document.getElementById("list");
        for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        alert("Cargando el video "+ f.name);
        reader.onload = (function (theFile) {
        return function (e) {

            var  noClave = document.createElement("video");
            noClave.setAttribute("id","video");
 noClave.setAttribute("src",e.target.result);
 noClave.setAttribute("controls",null);
             padre.appendChild(noClave);
        };
        })(f);
        reader.readAsDataURL(f);
        }
        var padre2 = document.getElementById("botones");
        var botonReproducir = document.createElement("button");
        botonReproducir.setAttribute("onclick","document.getElementById('video').play();");
        botonReproducir.setAttribute("class","btn btn-outline-primary");
        botonReproducir.textContent="Reproducir";
        padre2.appendChild(botonReproducir);
        var botonPause = document.createElement("button");
        botonPause.setAttribute("onclick","document.getElementById('video').pause();");
        botonPause.setAttribute("class","btn btn-outline-primary");
        botonPause.textContent="Pause";
        padre2.appendChild(botonPause);
        var botonVolumenMa = document.createElement("button");
        botonVolumenMa.setAttribute("onclick","subirVolumen()");
        botonVolumenMa.setAttribute("class","btn btn-outline-primary");
        botonVolumenMa.textContent= "Subir Volumen";
        padre2.appendChild(botonVolumenMa);
        var botonVolumenMe = document.createElement("button");
        botonVolumenMe.setAttribute("onclick","bajarVolumen()");
        botonVolumenMe.setAttribute("class","btn btn-outline-primary");
        botonVolumenMe.textContent="Bajar Volumen";
        padre2.appendChild(botonVolumenMe);
        }
        function bajarVolumen(){
            console.log(document.getElementById('video').volume);
        if (document.getElementById('video').volume >0.1 )
        console.log(document.getElementById('video').volume);
        document.getElementById('video').volume -= 0.1;
        }
        function subirVolumen(){
            if (document.getElementById('video').volume <0.9)
            document.getElementById('video').volume += 0.1;
        }