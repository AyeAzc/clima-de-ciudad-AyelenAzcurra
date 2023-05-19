// VARIABLES
let button = document.querySelector("button") 
let ciudad
let contenedorclima = document.querySelector(".contenedorclima")


// FUNCIONES
function ciudadClima(){
    let ciudad = $("input").val();
    if(ciudad == null || ciudad.length == 0){
        alert("Ingresa una ciudad por favor")
    }else{
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",function(data){
        console.log(data);
        contenedorclima.style.visibility = "visible";
        $("#pais").text(data.sys.country);
        $("#ciudad").text(data.name);

        $("#temperatura").text(Math.floor(data.main.temp));
        $("#grados").html("<sup>°C</sup>");

        $("#maxima").text(Math.floor(data.main.temp_max));
        $("#gradosmax").html("<p>°C</p>");

        $("#minima").text(Math.floor(data.main.temp_min));
        $("#gradosmin").html("<p>°C</p>");

        $("#humedad").text(Math.floor(data.main.humidity));
        $("#porcentaje").html("<p>%</p>");

        $("#termica").text(Math.floor(data.main.feels_like));
        $("#gradoster").html("<p>°C</p>");

        $("#presion").text(Math.floor(data.main.pressure));
        $("#mb").html("<p>mb</p>");

        $("#viento").text(Math.floor(data.wind.speed));
        $("#km").html("<p>km/h</p>");

        $("#wicon").attr("src","https://openweathermap.org/img/w/"+data.weather[0].icon+".png");
        $("#descripcion").text(data.weather[0].description);

// LOCAL STORAGE
        localStorage.setItem('ultimabusqueda', ciudad);
        let ultimabusqueda = ciudad;

        console.log(localStorage);

        $("#ultima").text(ultimabusqueda);

        })
    .fail(function(){
        alert("Ciudad no encontrada. Vuelve a intentarlo.");
    });

    $("input").val('');
}
}

button.addEventListener("click", function(){
    ciudadClima();
})