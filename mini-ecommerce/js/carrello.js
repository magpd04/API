document.addEventListener("DOMContentLoaded", () => {
    const carrelloList = document.getElementById('carrello');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        carrelloList.innerHTML = '<p>Il carrello è vuoto.</p>';
    } else {
        cart.forEach(prodotto => {
            const prodottoDiv = document.createElement('div');
            prodottoDiv.classList.add('col-md-4');
            prodottoDiv.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img src="${prodotto.image}" class="card-img-top" alt="${prodotto.title}">
                    <div class="card-body">
                        <h5 class="card-title">${prodotto.title}</h5>
                        <p class="card-text">${prodotto.price}€</p>
                        <button class="btn btn-danger remove-from-cart" data-id="${prodotto.id}">Rimuovi</button>
                    </div>
                </div>
            `;
            carrelloList.appendChild(prodottoDiv);
        });

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                cart = cart.filter(prodotto => prodotto.id != id);
                localStorage.setItem('cart', JSON.stringify(cart));
                location.reload();
            });
        });
    }
});
