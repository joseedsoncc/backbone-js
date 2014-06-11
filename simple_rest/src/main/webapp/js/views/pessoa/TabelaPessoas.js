TabelaPessoas = Backbone.View.extend({
	tagName : 'table',
	className : 'table',

	initialize : function() {
		this.collection.on('add', this.addOne, this);
		// this.collection.on('remove', this.removeOne, this);
	},

	render : function() {
		this.addHeader();

		this.collection.each(this.addOne, this);
		return this;
	},

	addHeader : function() {
		this.$el.append('<thead><td >Id</td><td >Nome</td> <td >cpf</td><td class="actions">Ações</td></tr></thead>');
	},

	addOne : function(pessoa) {
		var linhaPessoa = new LinhaPessoas({
			model : pessoa
		});
		this.$el.append(linhaPessoa.render().el);
	}
});
