// ALERTA DE CARRITO
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("Producto añadido al carrito");
    });
  });
  
  // REGISTRO
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const pass = document.getElementById("password").value;
      const confirmar = document.getElementById("confirmar").value;
  
      if (pass !== confirmar) {
        alert("Las contraseñas no coinciden");
        return;
      }
  
      // Guardar usuario
      localStorage.setItem("usuario", JSON.stringify({
        nombre: nombre,
        email: email,
        pass: pass
      }));
  
      alert("Registro exitoso");
      window.location.href = "login.html";
    });
  }
  
  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const email = document.getElementById("loginEmail").value;
      const pass = document.getElementById("loginPassword").value;
  
      const usuario = JSON.parse(localStorage.getItem("usuario"));
  
      if (!usuario) {
        alert("No hay usuarios registrados");
        return;
      }
  
      if (email === usuario.email && pass === usuario.pass) {
        alert(`Bienvenido/a ${usuario.nombre}`);
        window.location.href = "index.html";
      } else {
        alert("Datos incorrectos");
      }
    });
  }
  