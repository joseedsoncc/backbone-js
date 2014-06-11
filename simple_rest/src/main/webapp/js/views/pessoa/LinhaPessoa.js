LinhaPessoas = Backbone.View.extend({
	tagName : 'tr',
	template : templateByUrl('js/views/pessoa/tpl/TabelaPessoas.html'),

	initialize : function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.unrender, this);
	},

	events : {
		'click .remover' : 'removePessoa',
	},

	render : function() {
		if (this.model && this.model.get('id')) {
			var template = this.template(this.model.toJSON());
			this.$el.html(template);
		}
		return this;
	},

	removePessoa : function() {
		this.model.destroy();
	},

	unrender : function() {
		this.remove();
	},
});
