function extractInfo (data) {



 for (var count = 0; count < data.results.length; count++) {
  var etsy = data.results[count];
 	console.log(etsy);
    var title = etsy.title;
	var image = etsy.Images[0].url_75x75;
	var storeName = etsy.Shop.shop_name;
	var storeUrl = etsy.Shop.url;
	var price = etsy.price;
	var url = etsy.url;

	var etsyblock = `
	<div class="blockimages">
	   <div class="etsy-grid-block">
	   <img src=${image}>
	   </div>

	   <div class="title-section">
	   ${title}
	   </div>

	   <div class="bottom-section">
	   ${storeName} $${price}
	   </div>
	 </div>   
	 `;

	 $(".etsygrid").append(etsyblock);
// $( ".etsygrid" ).append();

	}


}
 console.log(extractInfo(data))
