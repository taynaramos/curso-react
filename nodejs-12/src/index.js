const promotionss = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const { products } = require('./data/products.json');

function getShoppingCart(ids, productsList){

	let productsChosen = productsList;
	
	//filtrando apenas os produtos escolhidos
	productsChosen = productsChosen.filter(item => {
		return ids.includes(item.id);
	});

	let category = productsChosen;
	//Saber quais são as categorias os produtos escolhidos
	category = category.map(item => item.category);


	let categoryList = category;
	//criar vetor sem categorias repetidas
	categoryList = categoryList.reduce( (accumulator, currentValue) => {
		
		if(accumulator.includes(currentValue)){
			return accumulator;

		}else{
			accumulator.push(currentValue);
			return accumulator;
			// ou só return [...accumulator, currentValue];
		}
		
	}, [])
	// nesse caso accumulator é um vetor já q o valor inicial é []
	
	//Para saber o tipo de look
	let promotion = "";
	promotion = promotionss[categoryList.length - 1];

	//Filtrando nome e categoria dos produtos selecionados
	let products = productsChosen;

	products = products.map(item => {
		return {
			name: item.name,
			category: item.category
		}
	})
	
	//Saber do total do preço regular
	let totalRegularPrice = productsChosen;

	totalRegularPrice = totalRegularPrice.map(item => {
		return {
			regularPrice : item.regularPrice
		}
	})
	
	totalRegularPrice = totalRegularPrice.reduce((acc, value) => {
		return acc + value.regularPrice;
	}, 0);

	//saber o valor total das peças com a promoção
	let totalPrice = productsChosen;

	totalPrice = totalPrice.reduce((acc, currentValue) => {
		

		for (let item of currentValue.promotions) {

			if(item.looks.includes(promotion)){
				return acc+=item.price
			}
		}
		return acc+=currentValue.regularPrice
	
	},0)

	let discountValue = totalRegularPrice - totalPrice

	let discountPercentageNumber = 100 - (totalPrice*100)/totalRegularPrice
	// discountPercentageNumber = Math.round(100 * discountPercentageNumber) / 100

	let discountPercentage = discountPercentageNumber.toString() + "%"
	return {
		// productsChosen,
		// category,
		// categoryList,
		products,
		promotion,
		// totalRegularPrice,
		totalPrice,
		discountValue,
		discountPercentage	
	};
}

getShoppingCart([120, 230, 310, 490], products);

module.exports = { 
	getShoppingCart
};
