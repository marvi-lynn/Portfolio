const product = [
    {
        id: 0,
        image: 'dress1.jpg',
        title: 'Casual Dress',
        price: '350',
    },
    {
        id: 1,
        image: 'dress2.jpg',
        title: 'Dream Closet',
        price: '1,500',
    },
    {
        id: 2,
        image: 'dress3.jpg',
        title: 'Bodycon Dress',
        price: '2,000',
    },
    {
        id: 3,
        image: 'dress4.jpg',
        title: 'Vestito Dress',
        price: '550',
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]})
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    
    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total += Number(price.replace(/,/g, '')); // Convert price to a number
            
            return (
                `<div class='cart-item'>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
        
        // Update the total price after looping
        const formattedTotal = total.toLocaleString();
        document.getElementById("total").innerHTML = "$ " + formattedTotal + ".00";
    }
}