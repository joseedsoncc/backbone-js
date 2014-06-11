FormPessoa = Backbone.View.extend({
	template : templateByUrl('js/views/pessoa/tpl/FormPessoa.html'),

	events : {
		'click #salvaPessoa' : 'salvaPessoa'
	},

	salvaPessoa : function() {
		var pessoaModel = this._getModel();
		pessoaModel.save({}, {
			success : function(_model, _resp, _options) {
				console.info('Pessoa ' + pessoaModel.get('nome') + ' Salvo com sucesso!');
			},

			error : function(_model, _xhr, _options) {
				console.error('Não foi possivel salvar a pessoa ' + pessoaModel.get('nome') + '!');
			}
		});
	},

	_getModel : function() {
		var pessoa = new PessoaModel({
			id : $('#inputId').val() || null,
			nome : $('#inputNome').val(),
			cpf : $('#inputCPF').val(),
			dataNascimento : $('#inputDataNascimento').val(),
		});
		return pessoa;
	},

	initialize : function() {

	},

	render : function() {
		var toShow = this.model || new PessoaModel();
		this.$el.html(this.template(toShow.toJSON()));
		return this;
	},
});
