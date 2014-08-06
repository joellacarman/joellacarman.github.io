var PortfolioRouter = Backbone.Router.extend({

  routes: {
    'about': 'update',
    'work': 'update',
    'contact': 'update',
    '*default': 'update'
  },

  update: function() {
    var id = Backbone.history.fragment || 'work';
    $('.view').hide().filter('#'+id).show();
    this.navigate(id);
  }
});

var NavView = Backbone.View.extend({

  el: '#nav',

  initialize: function(options) {
    this.listenTo(options.router, 'route', this.render);
  },

  render: function() {
    this.$('a')
      .removeClass('active')
      .filter('[href="#'+ Backbone.history.fragment +'"]')
      .addClass('active');
  }
});

var portfolioRouter = new PortfolioRouter();
var navView = new NavView({router: portfolioRouter});

Backbone.history.start();
