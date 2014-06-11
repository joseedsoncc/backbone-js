Router = Backbone.Router.extend({
	routes : {
		'' : 'entrouNaApp',
		'pessoa' : 'formNovaPessoa',
		'pessoa/:id' : 'formEditaPessoa',
		'pessoas' : 'pageListaPessoa',
	},
	
	entrouNaApp : function() {
		console.log('Consegui acessar a app');
	},

	formNovaPessoa : function() {
		var formPessoa = new FormPessoa();
		$('.main-content').html(formPessoa.render().el);
	},

	pageListaPessoa : function() {
		var listaDePessoas = new PessoaCollection();
		listaDePessoas.fetch({
			success : function() {
				var pagePessoas = new TabelaPessoas({
					collection : listaDePessoas
				});
				$('.main-content').html(pagePessoas.render().el);
			},
			error : function() {
				console.error('Não foi possivel carregar as pessoas..');
			}
		});

		console.info('exibindo lista de pessoas..');
	},
});
