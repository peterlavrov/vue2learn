var APP_LOG_LIFECYCLE_EVENTS = false;
var webstore = new Vue({	//#C
    el: '#app',	//#D
    data: {
        sitename: 'Vue.js Pet Depot',
        product: {
            id: 1001,
            title: "Cat food, 25lb bag",
            description: "A 25 pound bag of <em>irressistible</em>," + " organic goodness for your cat.",
            price: 2000,
            image: "assets/images/product-fullsize.png",
            availableInventory: 5
        },
        showProduct: true,
        cart: []
    },
    filters: {
        formatPrice: function (price) {
            if (!parseInt(price)) { return ""; }
            if (price > 99999) {
                var priceString = (price / 100).toFixed(2);
                var priceArray = priceString.split("").reverse();
                var index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ",");
                    index += 4;
                }
                return "$" + priceArray.reverse().join("");
            } else {
                return "$" + (price / 100).toFixed(2);
            }
        }
    },

    computed: {
        cartItemCount: function () {
            return this.cart.length
        },
        canAddToCart: function () {
            return this.product.availableInventory > this.cartItemCount
        }
    },

    methods: {
        addToCart: function () {
            this.cart.push(this.product.id)
        },
        showCheckout: function () {
            this.showProduct = this.showProduct ? false : true;
        }
    },

    beforeCreate: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeCreate')
        }
    },
    created: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('created')
        }
    },
    beforeMount: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeMount')
        }
    },
    mounted: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('mounted')
        }
    },
    beforeUpdate: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeUpdate')
        }
    },
    updated: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('updated')
        }
    },
    beforeDestroy: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeDestroy')
        }
    },
    destroyed: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('destroyed')
        }
    }
});	