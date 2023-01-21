// criar a variável modalKey sera global
let modalKey = 0

// variavel para controlar a quantidade inicial de artigos na modal
let quantartigos = 1

let cart = [] // carrinho

// funcoes auxiliares ou uteis
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)


const abrirModal = () => {
    seleciona('.artigoWindowArea').style.opacity = 0 // transparente
    seleciona('.artigoWindowArea').style.display = 'flex'
    setTimeout(() => seleciona('.artigoWindowArea').style.opacity = 1, 150)
}

const fecharModal = () => {
    seleciona('.artigoWindowArea').style.opacity = 0 // transparente
    setTimeout(() => seleciona('.artigoWindowArea').style.display = 'none', 500)
}

const botoesFechar = () => {
    // BOTOES FECHAR MODAL
    selecionaTodos('.artigoInfo--cancelButton, .artigoInfo--cancelMobileButton').forEach( (item) => item.addEventListener('click', fecharModal) )
}

const preencheDadosDosArtigos = (artigoItem, item, index) => {
    
    // setar um atributo para identificar qual elemento foi clicado
	artigoItem.setAttribute('data-key', index)
    artigoItem.querySelector('.artigo-item--img img').src = item.img
    artigoItem.querySelector('.artigo-item--preco').innerHTML = (item.preco)
    artigoItem.querySelector('.artigo-item--nome').innerHTML = item.nome
    artigoItem.querySelector('.artigo-item--desc').innerHTML = item.descrição
}

const preencheDadosModal = (item) => {
    seleciona('.artigoBig img').src = item.img
    seleciona('.artigoInfo h1').innerHTML = item.nome
    seleciona('.artigoInfo--desc').innerHTML = item.descrição
    seleciona('.artigoInfo--actualpreco').innerHTML = (item.preco)
}


const pegarKey = (e) => {
    // .closest retorna o elemento mais proximo que tem a class que passamos
    // do .artigo-item ele vai pegar o valor do atributo data-key
    let key = e.target.closest('.artigo-item').getAttribute('data-key')
    console.log('artigo clicado ' + key)
    console.log(artigoJson[key])

    // garantir que a quantidade inicial de artigos é 1
    quantartigos = 1

    // Para manter a informação de qual artigo foi clicada
    modalKey = key

    return key
}

/* const preencherCor = (key) => {
    // tirar a selecao de tamanho atual e selecionar o tamanho grande
    seleciona('.artigoInfo--cor.selected').classList.remove('selected')

    // selecionar todos os tamanhos
    selecionaTodos('.artigoInfo--cor').forEach((cor, corIndex) => {
        // selecionar o tamanho grande
        (corIndex == 2) ? cor.classList.add('selected') : ''
        cor.querySelector('span').innerHTML = artigoJson[key].cores[corIndex]
    })
}
 */
/* const escolherTamanhoPreco = (key) => {
    // Ações nos botões de tamanho
    // selecionar todos os tamanhos
    selecionaTodos('.artigoInfo--cor').forEach((cor, corIndex) => {
        cor.addEventListener('click', (e) => {
            // clicou em um item, tirar a selecao dos outros e marca o q vc clicou
            // tirar a selecao de tamanho atual e selecionar o tamanho grande
            seleciona('.artigoInfo--cor.selected').classList.remove('selected')
            // marcar o que vc clicou, ao inves de usar e.target use cor, pois ele é nosso item dentro do loop
            cor.classList.add('selected')

            // mudar o preço de acordo com o tamanho
            seleciona('.artigoInfo--actualpreco').innerHTML = (artigoJson[key].preco[corIndex])
        })
    })
} */

const mudarQuantidade = () => {
    // Ações nos botões + e - da janela modal
    seleciona('.artigoInfo--qtmais').addEventListener('click', () => {
        quantartigos++
        seleciona('.artigoInfo--qt').innerHTML = quantartigos
    })

    seleciona('.artigoInfo--qtmenos').addEventListener('click', () => {
        if(quantartigos > 1) {
            quantartigos--
            seleciona('.artigoInfo--qt').innerHTML = quantartigos	
        }
    })
}

const adicionarNoCarrinho = () => {
    seleciona('.artigoInfo--addButton').addEventListener('click', () => {
        console.log('Adicionar no carrinho')

        // pegar dados da janela modal atual
    	// qual artigo? pegue o modalKey para usar artigoJson[modalKey]
    	console.log("artigo " + modalKey)
    	// tamanho
	    let cor = seleciona('.artigoInfo--cor.selected').getAttribute('data-key')
	    console.log("Tamanho " + cor)
	    // quantidade
    	console.log("Quant. " + quantartigos)
        // preco
        let preco = seleciona('.artigoInfo--actualpreco').innerHTML.replace('&nbsp;', '')
    
        // crie um identificador que junte id e tamanho
	    // concatene as duas informacoes separadas por um símbolo, vc escolhe
	    let identificador = artigoJson[modalKey].id+'t'+cor

        // antes de adicionar verifique se ja tem aquele codigo e tamanho
        // para adicionarmos a quantidade
        let key = cart.findIndex( (item) => item.identificador == identificador )
        console.log(key)

        if(key > -1) {
            // se encontrar aumente a quantidade
            cart[key].qt += quantartigos
        } else {
            // adicionar objeto artigo no carrinho
            let artigo = {
                identificador,
                id: artigoJson[modalKey].id,
                cor, // cor: cor
                qt: quantartigos,
                preco: parseFloat(preco) // preco: preco
            }
            cart.push(artigo)
            console.log(artigo)
            console.log('Sub total  ' + (artigo.qt * artigo.preco).toFixed(2))
        }

        fecharModal()
        abrirCarrinho()
        atualizarCarrinho()
    })
}

const abrirCarrinho = () => {
    // exibir aside do carrinho no modo mobile
    seleciona('.menu-openner').addEventListener('click', () => {
        if(cart.length > 0) {
            seleciona('aside').classList.add('show')
            seleciona('aside').style.left = '0'
        }
    })
}

const fecharCarrinho = () => {
    // fechar o carrinho com o botão X no modo mobile
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('aside').style.left = '100vw' // usando 100vw ele ficara fora da tela
        seleciona('header').style.display = 'flex'
    })
}

const atualizarCarrinho = () => {
    // exibir número de itens no carrinho
	seleciona('.menu-openner span').innerHTML = cart.length
	
	// mostrar ou nao o carrinho
	if(cart.length > 0) {

		// mostrar o carrinho
		seleciona('aside').classList.add('show')

		// zerar meu .cart para nao fazer insercoes duplicadas
		seleciona('.cart').innerHTML = ''

        // crie as variaveis antes do for
		let subtotal = 0
		let desconto = 0
		let total    = 0

        // para preencher os itens do carrinho, calcular subtotal
		for(let i in cart) {
			// use o find para pegar o item por id
			let artigoItem = artigoJson.find( (item) => item.id == cart[i].id )
			console.log(artigoItem)

            // em cada item pegar o subtotal
        	subtotal += cart[i].preco * cart[i].qt
            //console.log(cart[i].preco)

			// fazer o clone, exibir na telas e depois preencher as informacoes
			let cartItem = seleciona('.models .cart--item').cloneNode(true)
			seleciona('.cart').append(cartItem)

			let artigocorName = cart[i].cor

			let artigoName = `${artigoItem.nome} (${artigocorName})`

			// preencher as informacoes
			cartItem.querySelector('img').src = artigoItem.img
			cartItem.querySelector('.cart--item-nome').innerHTML = artigoName
			cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt

			// selecionar botoes + e -
			cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
				console.log('Clicou no botão mais')
				// adicionar apenas a quantidade que esta neste contexto
				cart[i].qt++
				// atualizar a quantidade
				atualizarCarrinho()
			})

			cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
				console.log('Clicou no botão menos')
				if(cart[i].qt > 1) {
					// subtrair apenas a quantidade que esta neste contexto
					cart[i].qt--
				} else {
					// remover se for zero
					cart.splice(i, 1)
				}

                (cart.length < 1) ? seleciona('header').style.display = 'flex' : ''

				// atualizar a quantidade
				atualizarCarrinho()
			})

			seleciona('.cart').append(cartItem)

		} 
		desconto = subtotal * 0
		total = subtotal - desconto

		// exibir na tela os resultados
		// selecionar o ultimo span do elemento
		seleciona('.subtotal span:last-child').innerHTML = (subtotal)
		seleciona('.desconto span:last-child').innerHTML = (desconto)
		seleciona('.total span:last-child').innerHTML    = (total)

	} else {
		// ocultar o carrinho
		seleciona('aside').classList.remove('show')
		seleciona('aside').style.left = '100vw'
	}
}

const finalizarCompra = () => {
    seleciona('.cart--finalizar').addEventListener('click', () => {
        console.log('Finalizar compra')
        seleciona('aside').classList.remove('show')
        seleciona('aside').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}

// MAPEAR artigoJson para gerar lista de artigos
artigoJson.map((item, index ) => {
    //console.log(item)
    let artigoItem = document.querySelector('.models .artigo-item').cloneNode(true)
    //console.log(artigoItem)
    //document.querySelector('.artigo-area').append(artigoItem)
    seleciona('.artigo-area').append(artigoItem)

    // preencher os dados de cada artigo
    preencheDadosDosArtigos(artigoItem, item, index)
    
    // artigo clicada
    artigoItem.querySelector('.artigo-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou no artigo')

        
        let chave = pegarKey(e)
    

        // abrir janela modal
        abrirModal()

        // preenchimento dos dados
        preencheDadosModal(item)

        
        // pegar tamanho selecionado
        /* preencherCor(chave) */

		// definir quantidade inicial como 1
		seleciona('.artigoInfo--qt').innerHTML = quantartigos

        // selecionar o tamanho e preco com o clique no botao
        /* escolherTamanhoPreco(chave) */
    

    })

    botoesFechar()

}) 


// mudar quantidade com os botoes + e -
mudarQuantidade()
adicionarNoCarrinho()
atualizarCarrinho()
fecharCarrinho()
finalizarCompra()
