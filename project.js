let total = 0;
let count = 0;
function cardTotal(target) {
    const productTitle = target.parentNode.childNodes[1].innerText;
    const li = document.createElement('h6');
    const codeHeroContainer = document.getElementById('code-hero-container');
    // const cont =codeHeroContainer.appendChild(li);
    const llll = codeHeroContainer.children;
    codeHeroContainer.appendChild(li);
    li.innerText = productTitle;



    
    const productPrice = target.parentNode.childNodes[5].innerText.split(' ')[2];
    total = parseFloat(total) + parseFloat(productPrice);
    const cardTotal = document.getElementById('card-total').innerText = total;
    document.getElementById('all-discount').innerText = cardTotal*0.3
    document.getElementById('grand-total').innerText = cardTotal-cardTotal*0.3;
    const totalProductAtCard = count+=1;
    count = totalProductAtCard;
    const productCount = document.getElementById('count-item');
    productCount.innerText= totalProductAtCard;
    const productCount2 = document.getElementById('count-item2');
    productCount2.innerText= totalProductAtCard;
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = cardTotal-cardTotal*0.3;
}
