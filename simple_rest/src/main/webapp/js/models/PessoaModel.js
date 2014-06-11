PessoaModel = Backbone.Model.extend({
	urlRoot : 'rs/pessoas',
	defaults : {
		id : null,
		nome : '',
		cpf : '',
		dataNascimento : '',
	}
});