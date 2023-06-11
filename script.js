AOS.init();

document.querySelector('.navigator').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
  });
  
  document.querySelectorAll('.nav ul li a').forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('.nav').classList.remove('active');
    });
  });
  
