document.addEventListener("DOMContentLoaded", () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => {
            const categorieList = document.getElementById('categorie-list');
            data.forEach(categoria => {
                const categoriaDiv = document.createElement('div');
                categoriaDiv.classList.add('col-md-4');
                categoriaDiv.innerHTML = `
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${categoria}</h5>
                            <a href="categoria.html?categoria=${categoria}" class="btn btn-primary">Visualizza</a>
                        </div>
                    </div>
                `;
                categorieList.appendChild(categoriaDiv);
            });
        });
});
