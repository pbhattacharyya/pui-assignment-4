/* constructors */

function CouchPillow(shape, quantity, custom, ordered) {
    this.name = "Couch pillow"; 
    this.shape = shape;
    this.quantity = quantity;
    this.unitPrice = 29;
    this.totalPrice = 29 * quantity;
    this.custom = custom;
    this.image = "img/couch-pillow-background.jpg";
    this.order = ordered;
  } 

function BedPillow(shape, quantity, custom, ordered) {
    this.name = "Bed pillow"; 
    this.shape = shape;
    this.quantity = quantity;
    this.unitPrice = 39;
    this.totalPrice = 39 * quantity;
    this.custom = custom;
    this.image = "img/bed-pillow-background.jpg";
    this.order = ordered;
  }  

  function FloorPillow(shape, quantity, custom, ordered) {
    this.name = "Floor pouf pillow"; 
    this.shape = shape;
    this.quantity = quantity;
    this.unitPrice = 49;
    this.totalPrice = 49 * quantity;
    this.custom = custom;
    this.image = "img/floor-pillow-background.jpg";
    this.order = ordered;
  } 

  
  /* global variables */

  var shape, quantity, custom, pillowOrder; /* to temporarily store values retrieved from user input */

  var couchPillowAdded = false; /* to keep track of whether a couch pillow was added */

  var bedPillowAdded = false; /* to keep track of whether a bed pillow was added */

  var floorPillowAdded = false; /* to keep track of whether a floor pillow was added */

  var grandTotal = 0; /* total price of items in cart */

  var totalQty = 0; /* total price of items in cart */
  



$(document).ready(function() { 
    /* When couch pillow box on the product page is clicked */
    $("#couch-pillow-box").click(function() {
        console.log("couch pillow expand"); /*test*/
        $("#couch-pillow-box").css("width", "670px").css("cursor", "default"); /* to enlarge the box and change the cursor*/
        $("#couch-pillow-box .top-panel").css("width", "670px"); /* to enlarge the top panel*/
        $("#couch-pillow-box .backgroundimage").css("max-width", "").css("height", "auto").css("float", "left").css("padding", "10px").css("padding-righ", "30px").css("display", "inline-block").css("margin", "auto").css("max-height", "255px"); /* to resize the image*/
        $("#couch-pillow-box .text-box").css("visibility", "visible"); /* to make the input forms visible*/

        $("#couch-pillow-box #add-to-cart").click(function(){
            console.log('add to cart clicked');
            if (couchPillowAdded == false)
            {
                couchPillowAdded = true; /* to remember that at least one couch pillow has been added */
                shape = $("#couch-pillow-box #shape :radio:checked").attr('value'); /* to retrieve the shape specified by the user */
                quantity = parseInt($("#couch-pillow-box #quantity").val()); /* to retrieve the quantity specified by the user and turn it into a number */
                custom = $("#couch-pillow-box textarea#custom").val(); /* to retrieve any special comments the user left regarding customization */
                pillowOrder = JSON.stringify(new CouchPillow(shape, quantity, custom, couchPillowAdded)); /* to create a string of a CouchPillow object */
                localStorage.setItem("couchPillow", pillowOrder); /* to place the above string in local storage */
                console.log(localStorage.getItem("couchPillow")); /* to test that the local storage is working */
                $("#couch-pillow-box #add-to-cart").text("ADDED").attr("disabled", "disabled").css("background-color", "#4A4A4A"); /*to disable the ADD To CART button once the item has been added */
            }
        });
    });

    /* When bed pillow box on the product page is clicked */
    $("#bed-pillow-box").click(function() {
        console.log("bed pillow expand"); /*test*/
        $("#bed-pillow-box").css("width", "670px").css("cursor", "default"); /* to enlarge the box and change the cursor*/
        $("#bed-pillow-box .top-panel").css("width", "670px"); /* to enlarge the top panel*/
        $("#bed-pillow-box .backgroundimage").css("max-width", "").css("height", "auto").css("float", "left").css("padding", "10px").css("padding-righ", "30px").css("display", "inline-block").css("margin", "auto").css("max-height", "255px"); /* to resize the image*/
        $("#bed-pillow-box .text-box").css("visibility", "visible"); /* to make the input forms visible*/

        $("#bed-pillow-box #add-to-cart").click(function(){
            console.log('add to cart clicked');
            if (bedPillowAdded == false)
            {
                bedPillowAdded = true; /* to remember that at least one bed pillow has been added */
                shape = $("#bed-pillow-box #shape :radio:checked").attr('value'); /* to retrieve the shape specified by the user */
                quantity = parseInt($("#bed-pillow-box #quantity").val()); /* to retrieve the quantity specified by the user and turn it into a number */
                custom = $("#bed-pillow-box textarea#custom").val(); /* to retrieve any special comments the user left regarding customization */
                pillowOrder = JSON.stringify(new BedPillow(shape, quantity, custom, bedPillowAdded)); /* to create a string of a BedPillow object */
                localStorage.setItem("bedPillow", pillowOrder); /* to place the above string in local storage */
                console.log(localStorage.getItem("bedPillow")); /* to test that the local storage is working */
                $("#bed-pillow-box #add-to-cart").text("ADDED").attr("disabled", "disabled").css("background-color", "#4A4A4A"); /*to disable the ADD To CART button once the item has been added */
            }
        });
    });

    /* When floor pouf pillow box on the product page is clicked */
    $("#floor-pillow-box").click(function() {
        console.log("floor pillow expand"); /*test*/
        $("#floor-pillow-box").css("width", "670px").css("cursor", "default"); /* to enlarge the box and change the cursor*/
        $("#floor-pillow-box .top-panel").css("width", "670px"); /* to enlarge the top panel*/
        $("#floor-pillow-box .backgroundimage").css("max-width", "").css("height", "auto").css("float", "left").css("padding", "10px").css("padding-righ", "30px").css("display", "inline-block").css("margin", "auto").css("max-height", "255px"); /* to resize the image*/
        $("#floor-pillow-box .text-box").css("visibility", "visible"); /* to make the input forms visible*/

        $("#floor-pillow-box #add-to-cart").click(function(){
            console.log('add to cart clicked');
            if (floorPillowAdded == false)
            {
                floorPillowAdded = true; /* to remember that at least one floor pillow has been added */
                shape = $("#floor-pillow-box #shape :radio:checked").attr('value'); /* to retrieve the shape specified by the user */
                quantity = parseInt($("#floor-pillow-box #quantity").val()); /* to retrieve the quantity specified by the user and turn it into a number */
                custom = $("#floor-pillow-box textarea#custom").val(); /* to retrieve any special comments the user left regarding customization */
                pillowOrder = JSON.stringify(new FloorPillow(shape, quantity, custom, floorPillowAdded)); /* to create a string of a FloorPillow object */
                localStorage.setItem("floorPillow", pillowOrder); /* to place the above string in local storage */
                console.log(localStorage.getItem("floorPillow")); /* to test that the local storage is working */
                $("#floor-pillow-box #add-to-cart").text("ADDED").attr("disabled", "disabled").css("background-color", "#4A4A4A"); /*to disable the ADD To CART button once the item has been added */
            }
        });
    });


    /* When cart page is loaded */
    var currentCouchPillow, currentBedPillow, currentFloorPillow;
    currentCouchPillow = JSON.parse(localStorage.getItem("couchPillow"));
    currentBedPillow = JSON.parse(localStorage.getItem("bedPillow"));
    currentFloorPillow = JSON.parse(localStorage.getItem("floorPillow"));
    console.log(currentCouchPillow);
    $(".invisible-on-load").css({display: "none"});

    /* Displays Couch pillow if that is part of the order */
    if (currentCouchPillow.order)
    {
        $("#couch-pillow-cart").css({display: ""});
        $("#couch-pillow-cart #total-price").text("$" + currentCouchPillow.totalPrice);
        grandTotal += currentCouchPillow.totalPrice;
        totalQty += currentCouchPillow.quantity;
        $("#couch-pillow-cart #product-shape").text(currentCouchPillow.shape); 
        $("#couch-pillow-cart #product-unit-price").text("$" + currentCouchPillow.unitPrice); 
        $("#couch-pillow-cart #product-quantity").text(currentCouchPillow.quantity); 
        $("#couch-pillow-cart #product-custom").text(currentCouchPillow.custom); 
        totalUpdate();
    }

        /* Displays bed pillow if that is part of the order */
    if (currentBedPillow.order)
    {
        $("#bed-pillow-cart").css({display: ""});
        $("#bed-pillow-cart #total-price").text("$" + currentBedPillow.totalPrice);
        grandTotal += currentBedPillow.totalPrice;
        totalQty += currentBedPillow.quantity;
        $("#bed-pillow-cart #product-shape").text(currentBedPillow.shape); 
        $("#bed-pillow-cart #product-unit-price").text("$" + currentBedPillow.unitPrice); 
        $("#bed-pillow-cart #product-quantity").text(currentBedPillow.quantity); 
        $("#bed-pillow-cart #product-custom").text(currentBedPillow.custom); 
        totalUpdate();
    }

        /* Displays floor pouf pillow if that is part of the order */
    if (currentFloorPillow.order)
    {
        $("#floor-pillow-cart").css({display: ""});
        $("#floor-pillow-cart #total-price").text("$" + currentFloorPillow.totalPrice);
        grandTotal += currentFloorPillow.totalPrice;
        totalQty += currentFloorPillow.quantity;
        $("#floor-pillow-cart #product-shape").text(currentFloorPillow.shape); 
        $("#floor-pillow-cart #product-unit-price").text("$" + currentFloorPillow.unitPrice); 
        $("#floor-pillow-cart #product-quantity").text(currentFloorPillow.quantity); 
        $("#floor-pillow-cart #product-custom").text(currentFloorPillow.custom); 
        totalUpdate();
    }

    /* to remove couch pillow from the order */
    $("#couch-pillow-cart #delete-from-cart").click(function() {
        grandTotal -= currentCouchPillow.totalPrice;
        totalQty -= currentCouchPillow.quantity;
        pillowOrder = JSON.stringify(new CouchPillow("round", 1, "custom", false)); /* to create a string of a CouchPillow object */
        localStorage.setItem("couchPillow", pillowOrder); 
        $("#couch-pillow-cart").css({display: "none"});
        totalUpdate();
    });

    /* to remove bed pillow from the order */
    $("#bed-pillow-cart #delete-from-cart").click(function() {
        grandTotal -= currentBedPillow.totalPrice;
        totalQty -= currentBedPillow.quantity;
        pillowOrder = JSON.stringify(new BedPillow("round", 1, "custom", false)); /* to create a string of a CouchPillow object */
        localStorage.setItem("bedPillow", pillowOrder); 
        $("#bed-pillow-cart").css({display: "none"});
        totalUpdate();
    });

    /* to remove couch pillow from the order */
    $("#floor-pillow-cart #delete-from-cart").click(function() {
        grandTotal -= currentFloorPillow.totalPrice;
        totalQty -= currentFloorPillow.quantity;
        pillowOrder = JSON.stringify(new FloorPillow("round", 1, "custom", false)); /* to create a string of a CouchPillow object */
        localStorage.setItem("floorPillow", pillowOrder); 
        $("#floor-pillow-cart").css({display: "none"});
        totalUpdate();
    });

    /* to update intro text on cart page */
    function totalUpdate() {
        var qtySentence, priceSentence;
        if (totalQty == 0)
            qtySentence = "There are no items in your cart.";
        else if (totalQty == 1)
            qtySentence = "There is 1 item in your cart.";
        else
        qtySentence = "There are " + totalQty + " items in your cart.";
        
        priceSentence = "Your total is $" + grandTotal +".";
        $("#cart-intro").text(qtySentence + " " + priceSentence);
    }
});

