document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(prodotto => {
            const prodottoDiv = document.getElementById('prodotto');
            prodottoDiv.innerHTML = `
                <div class="col-md-6">
                    <img src="${prodotto.image}" class="img-fluid" alt="${prodotto.title}">
                </div>
                <div class="col-md-6">
                    <h1>${prodotto.title}</h1>
                    <p>${prodotto.description}</p>
                    <p>${prodotto.price}€</p>
                    <button class="btn btn-success" id="add-to-cart">Aggiungi al carrello</button>
                </div>
            `;

            document.getElementById('add-to-cart').addEventListener('click', () => {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(prodotto);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Prodotto aggiunto al carrello!');
            });
        });
});
