function getInfo() {
    var fromselector = document.getElementById('from');
    var toselector = document.getElementById('to');

        var origen = fromselector.value;
        var destino = toselector.value;

        if (origen && destino) {
            let mensaje = (origen === "New York" && 
            (destino === "London" || destino === "Paris" || destino === "Miami" || destino === "California" || destino === "Venice")) 
            ||
            (origen === "Chicago" && 
            (destino === "London" || destino === "Paris"|| destino === "Miami" || destino === "California" ))
            ||
            (origen === "Boston" && 
            (destino === "London" || destino === "Miami" || destino === "California" || destino === "Venice" ))
            ? "¡Tu vuelo no tiene escala!" 
            :  "¡Ojo! Tu vuelo tiene una escala"
                
            document.getElementById('trans').innerText = mensaje;
        } else {
            document.getElementById('trans').innerText = "";
        }
        fromselector.onchange = getInfo;
        toselector.onchange = getInfo;

    }


