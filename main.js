onload = () => {
    document.body.classList.remove("container");
  };


  document.addEventListener('DOMContentLoaded', function() {
    const titles = ['Para una mujer linda y complicada','pero cautivadora y especial a la vez' ,'no se mucho de relaciones por eso a veces mi comportamientos', 'solo quiero tener algo contigo de verdad, sin importa tu pasado o el mio.'];
    let index = 0;
  
    function changeTitle() {
      document.getElementById('nombre').textContent = titles[index];
      index = (index + 1) % titles.length;
    }
  
    setInterval(changeTitle, 4000);
  });
  
