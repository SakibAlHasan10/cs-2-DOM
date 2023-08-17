let total =0;
function cardTotal(target){
    const targetBtn = target.parentNode.childNodes[5].innerText.split(' ')[2];
    total = parseFloat(total) + parseFloat(targetBtn);
    const cardTotal = document.getElementById('card-total').innerText = total;
    document.getElementById('all-discount').innerText = cardTotal*0.3
    document.getElementById('grand-total').innerText = cardTotal-cardTotal*0.3;
    
    
}