
export const bulkBuy = (productPrice: number, numOfProds: number, multplier: number) => {
    let total;
    if(numOfProds >= 3) {
        const newPrice = productPrice * multplier;
        total = numOfProds * newPrice
    }else {
        total = numOfProds * productPrice;
    }
    return total;
}

export const buyOneGetOneFree = (productPrice: number, numOfProds: number, multplier: number) => {
    const remainder = numOfProds % 2;
    let total = ((numOfProds - remainder) * productPrice) * multplier;
    total+= (remainder * productPrice);
    return total;
}
