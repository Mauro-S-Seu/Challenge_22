//! .......... CHALLENGE 22 ..........

// INTELIGENCIA ARTIFICIAL EN UN HOSPITAL.
// Un hospital quiere que le hagamos una aplicación inteligente donde el paciente ponga sus datos, su dolencia
// y se determine que tipo de estudio debe realizarse. DOLENCIA: Dolor Abdominal.
// A tener en cuenta: a las mujeres embarazadas no se les puede hacer una tomografía o una placa porque puede tener efectos teratogénicos.

let paciente = prompt("Ingresar su nombre completo (Femenino): ").toLowerCase();
let sexo = prompt("Por favor, indicar sexo: ").toLowerCase();
let dolencia = prompt("Especifique tipo de dolor: ").toLowerCase();

if(sexo == 'femenino'){
    if(dolencia == 'dolor abdominal'.toLowerCase()){
        let preguntar = confirm('Está embarazada???');
        if (preguntar == true){
            alert("A Ud. no se le puede hacer una tomografía, ni una placa... Se le otorgará un turno para ecografía!!!");
        }else{
            alert("Se le dará un turno para tomografía/o placa!!!")
    }
}else{
    alert("Se le otorgará un turno a la brevedad.")
}
}else{
    alert("Ud. es del sexo masculino. \n Por normativas del Hospital... \n No puede realizarse ninguna clase de estudio aquí.")
}
