/* Aonde ficam os dados de cada artigo */
/* { } [ ] */
let artigoJson = [
    {
        id: 1,
        nome: 'Par brincos argolinha',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/2b6ceb37-0ee0-4ad2-9092-ef585820a2711-3ec2b121138693e43816673228905390-640-0.jpeg",
        preco: 29.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um par banhado a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 2,
        nome: 'Argolinhas com corrente',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/174c12bf-ba91-416b-81b1-3b77050faa651-15108949076ee6f6fd16673224431120-640-0.jpeg",
        preco: 19.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um par banhado a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 3,
        nome: 'Anel Pedra Oval',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/c29fc1be-5a90-449c-914a-031cb4f09562-e3041ec55d0f6ecfec16296695258854-640-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um anel banhado a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 4,
        nome: 'Argola Concha Dourada',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/99c5897b-9f36-422e-a588-6a33a501516c1-3abcb710626de6941416681697659705-640-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um par banhado a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 5,
        nome: 'Anel Pedrinhas',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/7d97b8f2-c0cc-44eb-a002-cbc54daedc8a-7656b772882b12611816296691379469-640-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um anel banhado a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 6,
        nome: 'Tornozeleira Strass',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/429e2423-726a-4637-a328-a6b5a8ec432c-440215a6797589475016295788596052-480-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Uma tornozeleira banhada a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 7,
        nome: 'Tornozeleira 2 Fios Verde',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/8f130f18-48b7-457b-add9-e3b03e100bd2-351da4dd97f49b4bfa16296417168004-640-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Uma tornozeleira banhada a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 8,
        nome: 'Anel Mini Pedrinha',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/7c2bfddc-9a96-41d3-bec5-a68ba1f23c7d-d8c652926b56a7aee816296690304941-640-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um anel banhado a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 9,
        nome: 'Pulseira Cruz',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/8f130f18-48b7-457b-add9-e3b03e100bd2-351da4dd97f49b4bfa16296417168004-640-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Uma pulseira banhada a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 10,
        nome: 'Pulseira Pedrinhas Brancas',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/758d3057-8fd2-4d44-9a80-7f6dadfa7a46-610d156ba3a28c827016296412812453-480-0.jpeg",
        preco: 8.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Uma pulseira banhada a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 11,
        nome: 'Brinco Vidros Comprido',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/db79ddbf-a02f-406c-b1cb-a47a6ffb68a8-9043774e117f22f90216296411600252-480-0.jpeg",
        preco: 7.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um par banhado a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 12,
        nome: 'Argola Básica Lisa',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/6c78a6a1-6820-4eee-9304-d35766cd34b4-2ec73153e2d7433dea16498850588958-480-0.jpeg",
        preco: 5.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um par banhado a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 13,
        nome: 'Piercing Fake Girassóis',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/5673ac3a-e10b-46b5-9471-ff7eedb0f946-c82099430c514f5a5416345095347034-640-0.jpeg",
        preco: 6.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um piercing fake banhado a ouro amarelo ou branco. Hipoalergénico e tamanho único'
    },
    {
        id: 14,
        nome: 'Choker Pérolas Rosé',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/43758480-4d13-44bc-b140-02be388d4771-8c5fb8cba2b80a93d416320782588155-640-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Medida: 35cm, banhado a ouro amarelo/branco. Hipoalergénico e tamanho único'
    },
    {
        id: 15,
        nome: 'Piercing Fake Fininho',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/845ba1fe-3469-4566-b56b-fc9e332c7e3c-d64b4e6c79d3b6958816296544729182-640-0.jpeg",
        preco: 5.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um piercing fake banhado a ouro amarelo/branco. Hipoalergénico e tamanho único'
    },
    {
        id: 16,
        nome: 'Bracelete Nó',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/5ce5b210-753c-4135-acec-77baf6cbe78a-8a7e2266b3bdee340f16296414886694-640-0.jpeg",
        preco: 8.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um bracelete banhado a ouro amarelo/branco. Hipoalergénico e tamanho único'
    },
    {
        id: 17,
        nome: 'Piercing Fake Spikes',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/cf508064-d103-464d-9c10-771882e969db-7a686ad99229b2b7c016644722185625-640-0.jpeg",
        preco: 7.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um piercing fake banhado a ouro amarelo/branco. Hipoalergénico e tamanho único'
    },
    {
        id: 18,
        nome: 'Colar Pingentinho Flor Zircônias',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/2844ab58-9a4c-4e71-8dd6-efadee4a634a-a133ba419cfb4b32b916498828187895-640-0.jpeg",
        preco: 12.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Medida: 38cm banhado a ouro amarelo/branco. Hipoalergénico e tamanho único'
    },
    {
        id: 19,
        nome: 'Colar Mini Coração',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/8ec2dbe0-8a9b-4cf7-957f-4ba047e026b1-80e1de148eeed9b81616498825481365-640-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Medida: 35cm banhado a ouro amarelo/branco. Hipoalergénico e tamanho único'
    },
    {
        id: 20,
        nome: 'Colar 2 Cobras',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/822/347/products/3f02531d-4981-4ff8-8d06-774595317252-b4e5fac14c2cef405e16296529832267-480-0.jpeg",
        preco: 9.99,
        cor: ['Prata', 'Dourado','Rose'],
        descrição: 'Um colar banhado a ouro amarelo/branco. Hipoalergénico e tamanho único'
    }

]