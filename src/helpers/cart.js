export const calculateTotalAmount = (cart) => {  
    const defaultTotalAmount = 0;
    return cart.length ?
                cart.map(t => parseFloat(t.totalAmount)).reduce((acc, curr) => acc + curr)
            :
            defaultTotalAmount    
}

export const addToCart = (cartLS, productToAdd ) => {

    const {id, idPackaging, ref, price, weight} = productToAdd;
    const newCart = JSON.parse(JSON.stringify(cartLS));
    const itemFoundIndex = cartLS.findIndex(t => (t.id === id) && (t.idPackaging === idPackaging) );

    if(itemFoundIndex === -1) {
        console.log("ce produit et son packaging ne sont pas présent on l'ajoute")
        newCart.push({id, idPackaging, ref, price, weight, quantity : 1});
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
    } 
    if(itemFoundIndex >= 0){
        console.log("Ce produit existe, on augmente la quantité")
        newCart[itemFoundIndex].quantity += 1;
        const newTotalAmount = parseFloat(price) * newCart[itemFoundIndex].quantity;
        newCart[itemFoundIndex].totalAmount = newTotalAmount.toFixed(2);
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
    }
}
