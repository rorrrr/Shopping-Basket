var shopping_basket = {
  items: [],
  basketTotal: 0,
  i: 0,
  j: null,
  bOGOFitems: [],
  bOGOFsavings: 0,
  savings: 0,
  arr: [],

  add: function(item) {
    this.items.push(item)
  },

  remove: function(item){
    this.items.pop(item)
  },

  countMultiples: function(item){
    this.count = 0;
    for (var i = 0; i< this.items.length; i++) {
      if ( this.items[i] === item) {
        this.count += 1; 
      }
    }
    return this.count;
  },

    eliminateDuplicates: function(arr) {
      var i,
          len=arr.length,
          out=[],
          obj={};

      for (i=0;i<len;i++) {
        obj[arr[i]]=0;
      }
      for (i in obj) {
        out.push(i);
      }
      return out;
    },

    bogOfDiscount: function() 
    {
      var bOGOFItems = [];
      this.bOGOFsavings = 0
      for (var j = (this.eliminateDuplicates(this.items).length); j-- > 0;)
      {
        if (this.items[j].bOGOF === true)
        {
          this.bOGOFsavings += Math.floor(this.countMultiples(this.items[j]) / 2 )*this.items[j].price;
          
        }
        else 
        {
          this.bOGOFsavings = 0;
        }
      }
      return this.bOGOFsavings;
    },

  // total: function(customer) {
  //   this.basketTotal = 0;
  //   for (var j = this.items.length; j-- > 0;){
  //     if (this.items[j].bOGOF === true){
  //       if (shopping_basket.countMultiples(this.items[i]) > 1){
  //       this.basketTotal += 0.5*this.items[j].price; 
  //     } else
  //     {
  //     this.basketTotal += this.items[j].price;
  //     }

  //   }

  //   if (this.basketTotal >= 20) 
  //   {
  //     this.basketTotal*=0.9;
  //   }
  //   else
  //   {
  //     this.basketTotal;
  //   }

  //   if (customer.loyaltyHolder === true)
  //   {
  //     return this.basketTotal*0.95;
  //   }
  //   else
  //   {
  //     return this.basketTotal;
  //   }
  // }


  total: function(customer) {
    var savings = this.bogOfDiscount();
    this.basketTotal = 0;
    for (var eachItem of this.items){
      this.basketTotal += eachItem.price;
    }

    // console.log(this.)

    this.basketTotal -= savings;

    console.log(this.basketTotal)

    if (this.basketTotal >= 20) 
    {
      this.basketTotal*=0.9;
    // console.log(this.basketTotal)

    }
    else
    {
      this.basketTotal;
    }
    if (customer.loyaltyHolder === true)
    {
      // console.log(this.basketTotal)
      return (this.basketTotal*0.95).toFixed(2);

    }
    else{
      return this.basketTotal.toFixed(2);
    }
  }
};

module.exports = shopping_basket;