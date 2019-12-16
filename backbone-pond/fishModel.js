// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  toggleDescription: () => {
    Fish.displayInfo= !Fish.displayInfo;
    console.log(Fish.displayInfo)
    return Fish.displayInfo ;
  }
});
