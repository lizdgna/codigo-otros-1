

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');  // Selecciona por id Y se debe utilizar numeral para elementos de tipo id
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');  // Selecciona por clase

async function displayUser(username) {//la funcion debe ser de tipo asincrona 
  try {
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //La respuesta debe ser en formato JSON
    console.log(data);
    $n.textContent = `${data.name}`;  // Usar backtics por el formato json 
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) { //Anadi un catch para posibles errores 
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; 
}

displayUser('stolinski').catch(handleError);
