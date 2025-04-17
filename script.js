// Désactiver le clic droit et les raccourcis clavier
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
    }
});

// Ajoute un message de bienvenue
console.log("Bienvenue sur mon portfolio !");
