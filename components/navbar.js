document.addEventListener("DOMContentLoaded", function() {
    // Crear el contenedor del navbar
    const navbar = document.createElement("nav");
    navbar.style.display = "flex";
    navbar.style.alignItems = "center";
    navbar.style.backgroundColor = "#333";
    navbar.style.padding = "10px 20px";
    navbar.style.color = "white";

    // Crear el logo
    const logo = document.createElement("img");
    logo.src = "assets/images/logo2-f1.jpg"; // Cambia esta ruta por la de tu logo
    logo.alt = "Logo";
    logo.style.width = "120px";
    logo.style.height = "auto";
    logo.style.marginRight = "20px";

    // Crear la lista de enlaces
    const navLinks = document.createElement("ul");
    navLinks.style.listStyle = "none";
    navLinks.style.display = "flex";
    navLinks.style.gap = "20px";
    navLinks.style.margin = "0";
    navLinks.style.padding = "0";

    // Elementos del menú
    const menuItems = [
        { text: "Inicio", href: "#inicio" },
        { text: "Eventos", href: "#eventos" },
        { text: "En Vivo", href: "#envivo" },
        { text: "Pilotos", href: "#pilotos" },
        { text: "Pistas", href: "#pistas" }
    ];

    // Añadir cada elemento del menú
    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = item.text;
        a.href = item.href;
        a.style.color = "white";
        a.style.textDecoration = "none";
        a.style.fontSize = "18px";
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    // Añadir logo y enlaces al navbar
    navbar.appendChild(logo);
    navbar.appendChild(navLinks);

    // Insertar el navbar en el cuerpo del documento
    document.body.insertBefore(navbar, document.body.firstChild);
});
