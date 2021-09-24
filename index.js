var url = "http://thingslearned.rf.gd/php/";

var aplicacion = new function(){



    this.leer = function(){
        console.log("conectado a base de datos");
    }

    this.Agregar = function(){

        this.correo = document.getElementById("exampleFormControlInput1");
        this.mensaje = document.getElementById("exampleFormControlTextarea1");
        
        console.log(this.correo.value);

        var datosEnviar={correo:this.correo.value,mensaje:this.mensaje.value};

        fetch(url+"?insertar=1",{method:"POST",body:JSON.stringify(datosEnviar)})
        .then(respuesta=>respuesta.json)
        .then((datosRespuestas)=>{
            console.log("Insertados");

            alertify.success('Mensaje Enviado');

            this.mensaje.value="";
            this.correo.value="";

        })
        .catch(console.log);


        
    };


}
aplicacion.leer();

