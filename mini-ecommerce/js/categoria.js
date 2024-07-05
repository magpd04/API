document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');
    fetch(`https://fakestoreapi.com/products/category/${categoria}`)
        .then(response => response.json())
        .then(data => {
            const categoriaProdotti = document.getElementById('categoria-prodotti');
            data.forEach(prodotto => {
                const prodottoDiv = document.createElement('div');
                prodottoDiv.classList.add('col-md-4');
                prodottoDiv.innerHTML = `
                    <div class="card mb-4 shadow-sm">
                        <img src="${prodotto.image}" class="card-img-top" alt="${prodotto.title}">
                        <div class="card-body">
                            <h5 class="card-title">${prodotto.title}</h5>
                            <p class="card-text">${prodotto.price}€</p>
                            <a href="prodotto.html?id=${prodotto.id}" class="btn btn-primary">Visualizza</a>
                        </div>
                    </div>
                `;
                categoriaProdotti.appendChild(prodottoDiv);
            });
        });
});
