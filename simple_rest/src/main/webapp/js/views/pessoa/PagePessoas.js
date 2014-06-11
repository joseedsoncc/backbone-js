PagePessoas = Backbone.View.extend({

	template : templateByUrl('js/views/pessoa/tpl/PagePessoas.html'),

	initialize : function() {

	},

	render : function() {
		var that = this;
		// console.log(this.collection);
		this.$el.html(this.template());
		this.collection.forEach(function(pessoa) {
			var linha = '<tr>' + '	<td>' + pessoa.get('id') + '</td>' + '	<td>' + pessoa.get('nome') + '</td>' + '	<td>' + pessoa.get('cpf') + '</td>' + '	<td>' + pessoa.get('dataNascimento') + '</td>' + '	<td> edit | delete</td>' + '</tr>';
			that.$el.find('tbody').append(linha);
		});

		return this;
	},
});