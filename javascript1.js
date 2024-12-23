// script.js


// Fonction 3 : Navigation fluide entre les sections
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

// Fonction 4 : Mode clair/sombre
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

document.getElementById('dark-mode-toggle')?.addEventListener('click', toggleDarkMode);

// Fonction 5 : Affichage d'une fenêtre modale pour les détails des produits
document.querySelectorAll('.product').forEach((product) => {
    product.addEventListener('click', () => {
        const modal = document.getElementById('product-modal');
        const productName = product.querySelector('h3').textContent;
        const productDescription = product.querySelector('.product-description').textContent;

        modal.querySelector('.modal-title').textContent = productName;
        modal.querySelector('.modal-body').textContent = productDescription;
        modal.style.display = 'block';
    });
});

// Fonction pour fermer la fenêtre modale
document.getElementById('modal-close')?.addEventListener('click', () => {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
});
document.querySelectorAll('.whatsapp-button').forEach((button) => {
    button.addEventListener('click', (e) => {
        // Vérifie si tu veux ajouter des actions ici (par exemple, ajouter au panier)
        const productName = e.target.closest('.product').querySelector('h3').textContent;
        const productPrice = e.target.closest('.product').querySelector('.new-price').textContent;

        console.log(`Produit : ${productName}, Prix : ${productPrice}`); // Pour tester

        // Ne pas bloquer la redirection
        // Supprime e.preventDefault(); ici ou ajoute-le seulement si une condition particulière est nécessaire
    });
});
// Afficher/Masquer le bouton "Retour en haut"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Revenir en haut lorsqu'on clique sur le bouton
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
// Recherche dynamique
const searchBar = document.getElementById('search-bar');
const products = document.querySelectorAll('.product');

searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();

    products.forEach((product) => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchText)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
// Alerte personnalisée pour les boutons
document.querySelectorAll('.whatsapp-button').forEach((button) => {
    button.addEventListener('click', (e) => {
        alert('Merci pour votre intérêt ! Vous serez redirigé vers WhatsApp.');
    });
});
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});
document.querySelectorAll('.product').forEach((product) => {
    let clickCount = 0;

    product.addEventListener('click', () => {
        clickCount++;
        console.log(`Produit cliqué ${clickCount} fois`);
    });
});
document.querySelectorAll('.product-images img').forEach((image) => {
    image.addEventListener('click', () => {
        const fullScreenContainer = document.createElement('div');
        fullScreenContainer.style.position = 'fixed';
        fullScreenContainer.style.top = 0;
        fullScreenContainer.style.left = 0;
        fullScreenContainer.style.width = '100%';
        fullScreenContainer.style.height = '100%';
        fullScreenContainer.style.background = 'rgba(0, 0, 0, 0.8)';
        fullScreenContainer.style.display = 'flex';
        fullScreenContainer.style.alignItems = 'center';
        fullScreenContainer.style.justifyContent = 'center';
        fullScreenContainer.style.zIndex = 1000;

        const fullScreenImage = document.createElement('img');
        fullScreenImage.src = image.src;
        fullScreenImage.style.maxWidth = '90%';
        fullScreenImage.style.maxHeight = '90%';

        fullScreenContainer.appendChild(fullScreenImage);
        document.body.appendChild(fullScreenContainer);

        fullScreenContainer.addEventListener('click', () => {
            fullScreenContainer.remove();
        });
    });
});
const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = '#333';
    notification.style.color = '#fff';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = 1000;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
};

document.querySelectorAll('.product').forEach((product) => {
    product.addEventListener('click', () => {
        showNotification('Produit ajouté au panier !');
    });
});
