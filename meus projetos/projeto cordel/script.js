document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productTableBody = document.querySelector('#product-table tbody');

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('product-name').value;
        const url1 = document.getElementById('product-url-1').value;
        const price1 = document.getElementById('product-price-1').value;
        const url2 = document.getElementById('product-url-2').value;
        const price2 = document.getElementById('product-price-2').value;
        const url3 = document.getElementById('product-url-3').value;
        const price3 = document.getElementById('product-price-3').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td><a href="${url1}" target="_blank">${price1}</a></td>
            <td><a href="${url2}" target="_blank">${price2}</a></td>
            <td><a href="${url3}" target="_blank">${price3}</a></td>
        `;

        productTableBody.appendChild(row);
        productForm.reset();
    });
});
