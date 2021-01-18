

  var appLike = new Vue (
    {
      el: "#app-like",
      data: {
        isLiked: false,
        isDisliked: false
      },
      methods: {
        changeLike: function () {
          if (this.isDisliked == true && this.isLiked == false){
            this.isDisliked = false;
            this.isLiked = true;
          } else if (this.isLiked == true){
            this.isLiked = false;
          } else this.isLiked = true;
        },
        changeDislike: function () {
          if (this.isLiked == true && this.isDisliked == false){
            this.isLiked = false;
            this.isDisliked = true;
          } else if (this.isDisliked == true){
            this.isDisliked = false;
          } else this.isDisliked = true;
        }
      }
    }
  )