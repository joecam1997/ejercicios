
//const formLogin = document.querySelector('form')
// /// Login con FETCH
// formLogin.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   // creamos un objeto FormData con los valores de los controles del Formulario HTML
//   const formdata = new FormData(event.target)
//   // covertimos los datos en objeto key: values (diccionario)
//   const data = Object.fromEntries(formdata.entries())

//   const response = await fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   })

//   if (!response.ok) {
//     alert("Credenciales incorrectas..")
//     return
//   }

//   const userData = await response.json()
//   console.log(userData)
//   window.location.href = 'index.html'

// });


// Login con AJAX de JQUERY
// formLogin.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // creamos un objeto FormData con los valores de los controles del Formulario HTML
//   const formdata = new FormData(event.target)
//   // covertimos los datos en objeto key: values (diccionario)
//   const data = Object.fromEntries(formdata.entries())
//   // ASYNC JAVASCRIPT XML
//   $.ajax({ // call async hacia un servicio API
//     url: 'https://dummyjson.com/auth/login',
//     data: data,
//     method: 'POST',
//     dataType: 'json',
//   }).done(function (response) { /// respuesta OK: 200, 201 status HTTP
//     console.log("usuario:", response);
//     window.location.href = 'index.html';
//   }).fail(function () { /// respuesta FAIL: 500, 404 status HTTP
//     console.log("Error de respuesta Servidor.")
//   });

// });


$(function () { // lee el documentos HTML (DOM) y se aegura de que el DOM este cargado

  $('form').on('submit', (event) => {

    event.preventDefault();

    $('#id-alert-error').addClass('d-none') // ocultar alert error
    $('#id-loading-spinner').removeClass('d-none')

    const formdata = new FormData(event.target)
    // covertimos los datos en objeto key: values (diccionario)
    const data = Object.fromEntries(formdata.entries())

    $.ajax({ // call async hacia un servicio API
      url: 'https://dummyjson.com/auth/login',
      data: data,
      method: 'POST',
      dataType: 'json',
    }).done(function (response) { /// respuesta OK: 200, 201 status HTTP

      console.log("usuario:", response);
      window.location.href = 'index.html';

    }).fail(function (jqXHR, textStatus, errorThrown) { /// respuesta FAIL: 500, 404 status HTTP

      $('#id-loading-spinner').addClass('d-none') // ocultar loading-spinner
      $('#id-alert-error').removeClass('d-none') // presentar alert error
      $('#id-error-message').html(jqXHR.responseJSON.message) // agregar mensaje de error dentro de HTML

    })

  })

});
