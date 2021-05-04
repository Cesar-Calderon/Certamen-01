tinymce.init({
    selector: '#detalle-crimenes-txt',
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

const reos = [];  

const cargarTabla = ()=>{
    const tbody = document.querySelector("#tbody-tabla");
    tbody.innerHTML = "";

    for(let i=0; i < reos.length; ++i){
        let r = reos[i];

        let fila = document.createElement("tr");

        let celdaNombre = document.createElement("td");
        let celdaApellido = document.createElement("td");
        let celdaCrimenes = document.createElement("td");
        let celdaDetalles = document.createElement("td");
        let celdaCiudad = document.createElement("td");

        fila.appendChild(celdaNombre);
        celdaNombre.innerText = r.nombre;
        fila.appendChild(celdaCrimenes);
        celdaCrimenes.innerText = r.detalles;
        fila.appendChild(celdaDetalles);
        celdaDetalles.innerText = r.ciudad;
        fila.appendChild(celdaCiudad);
        celdaCiudad.innerText = r.crimenes;
        
        tbody.appendChild(fila);
    }



};

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let apellido = document.querySelector("#apellido-txt").value;
    let crimenes = document.querySelector("#crimenes-txt").value;
    let detalles = tinymce.get("detalle-crimenes-txt").getContent();
    let ciudad = document.querySelector("#tipo-select").value;
    let reo = {};   
    reo.nombre = nombre +" "+ apellido;
    reo.apellido = apellido;
    reo.crimenes = crimenes;

    reo.detalles = detalles;
    reo.ciudad = ciudad;
    reos.push(reo);

    cargarTabla();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro de criminal realizado”!',
        showConfirmButton: false,
        timer: 1500
      })

    
});  
  