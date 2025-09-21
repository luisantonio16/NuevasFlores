onload = () => {
    document.body.classList.remove("container");
  };


  document.addEventListener('DOMContentLoaded', function() {
    const titles = ['Para una mujer linda y complicada','pero cautivadora y peculiar a la vez ' ,'espero que me des la oportunidad de cocnocerte mas', 'y ver que tan dificil y encantadora puedes ser.'];
    let index = 0;
  
    function changeTitle() {
      document.getElementById('nombre').textContent = titles[index];
      index = (index + 1) % titles.length;
    }
  
    setInterval(changeTitle, 4000);
  });
  
