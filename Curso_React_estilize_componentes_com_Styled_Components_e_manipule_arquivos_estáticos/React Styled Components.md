# Curso Alura React: estilize componentes com Styled Components e manipule arquivos estáticos

## Aula 01 - Iniciando o Projeto

### Aula 01 - Apresentação - Video 1

Nesta aula, os instrutores Vinny Neves e João Vitor apresentam o curso de React e anunciam a construção de uma aplicação chamada SpaceApp. O objetivo do projeto é criar um catálogo de imagens do espaço, onde os usuários poderão transformar fotos em favoritas. Além disso, serão abordados temas como o uso de uma modal para zoom da imagem, diferentes tamanhos de exibição, manipulação de arquivos estáticos e o uso de ferramentas importantes para desenvolvedores front-end, como o Vite e o Styled Components. É recomendado ter conhecimentos básicos de React e HTML com CSS, especialmente o Flexbox, para acompanhar o curso.

### Aula 01 - Criando app - Video 2

Na nova versão da documentação do React e até com alguns comunicados oficiais que o time que desenvolve o React trouxe para a comunidade, para criarmos uma aplicação que funciona como uma SPA (Single Page Application), eles não recomendam mais o uso do Creative React App. Mas para novas aplicações, eles sugerem o uso do Vite ou do [Parcel](https://parceljs.org/). E, no nosso caso, vamos usar o [Vite](https://vitejs.dev/guide/).

> npm create vite@latest

Os componentes visuais aqui são muito ricos, com diversos estilos envolvidos. Para codar esses estilos, ou seja, trazer nosso CSS para dentro da aplicação, existem várias formas diferentes.  
O que vamos utilizar no decorrer desse curso e para criar o Space App é o [Styled Components](https://styled-components.com/docs/basics#installation).

> npm install styled-components@latest

Essa é uma das formas de estilizar componentes React. Essa técnica é chamada de "CSS in JS" e existem outras alternativas além do Styled Components, mas para nosso caso, vamos continuar com ele.

Nesta aula, os instrutores discutem sobre a criação de uma aplicação React a partir de um layout pronto no Figma. Eles utilizam o Vite como ferramenta de desenvolvimento, explicando sua versatilidade e compatibilidade com diferentes frameworks e bibliotecas. O processo de criação da aplicação é mostrado, incluindo a instalação das dependências e a execução do servidor de desenvolvimento. Além disso, é mencionado o uso do Styled Components para estilizar os componentes React. Ao final, é destacado que todas as bases necessárias para começar a construir os componentes do SpaceApp estão prontas.

### Aula 01 - Fundo com gradiente - Video 3

Nesta aula, Vinicios e João discutem sobre a criação de um componente de fundo gradiente para uma aplicação React utilizando Styled Components. Eles começam a transformar o design do Figma em componentes, começando de cima para baixo. Vinicios explica a importância de verificar se não houve erros após as alterações realizadas. Em seguida, Vinicios mostra como criar o componente de fundo gradiente utilizando o Styled Components e adiciona o estilo de gradiente de fundo copiado do Figma. Ele também menciona a extensão "vscode-styled-components" do VS Code. Por fim, Vinicios adiciona estilos de largura e altura mínima ao componente de fundo gradiente, explicando a importância de utilizar a unidade de medida "vh" para a altura e mencionando a biblioteca Normalize.css como uma solução para lidar com as diferenças de comportamento entre os navegadores.

### Aula 01 - Normalizando o CSS - Video 4

[Normalize.css](https://necolas.github.io/normalize.css/), este é o normalize mencionado no curso, mas nesta aula estaremos utilizando o normalize(reset css) modificado pelo professor.

Nesta aula, os instrutores discutem sobre como lidar com estilos globais dentro de aplicações React que utilizam Styled Components. Eles mostram como criar um componente de estilos globais utilizando a função createGlobalStyle do Styled Components. O objetivo dessa abordagem é garantir que os estilos globais sejam compartilhados entre todos os componentes styled da aplicação, evitando a necessidade de repetir o código de estilos em cada componente individualmente.

### Aula 01 - Para saber mais: CSS-in-JS e SCSS

CSS-in-JS e SCSS são duas maneiras diferentes de lidar com estilos em sites.
CSS-in-JS é quando escrevemos os estilos dentro do código JavaScript. Os estilos são tratados como objetos JavaScript e são aplicados ao HTML durante a execução do site. Com isso, podemos mudar os estilos de forma dinâmica com base no que está acontecendo no site. Também temos a vantagem de aplicar os estilos apenas aos componentes específicos em que queremos usá-los. Alguns exemplos populares de bibliotecas CSS-in-JS são styled-components e Emotion.

Já o SCSS é uma extensão do CSS que adiciona alguns recursos legais, como variáveis, mixins e aninhamento de seletores. Com o SCSS, podemos escrever estilos de forma mais eficiente e reutilizável. A sintaxe é bem parecida com o CSS comum, mas com esses recursos extras. Porém, é importante lembrar que o SCSS precisa ser transformado em CSS antes de ser usado pelo navegador. Isso é feito usando ferramentas como Node.js e Sass.

Resumindo, CSS-in-JS é quando escrevemos os estilos dentro do JavaScript, permitindo mais dinamismo e estilos específicos para cada componente. Já o SCSS é uma extensão do CSS que adiciona recursos avançados, mas precisa ser convertido em CSS antes de ser usado pelo navegador.

### Aula 01 - Nessa aula, você aprendeu como

Utilizar o Vite para iniciar um projeto React;
Instalar e implementar a biblioteca styled-components;
Criar um fundo com gradiente;
Normalizar o CSS com estilos globais.

## Aula 02 - Componentes Iniciais e Fontes

### Aula 02 - Cabeçalho - Video 1

Nesta aula, os instrutores começam explicando a criação do primeiro componente visual do projeto, o "header". Eles mostram como estilizar o header utilizando o Styled Components, definindo margens, display flex e justify-content. Em seguida, adicionam a imagem da logomarca e explicam a importância de colocá-la na pasta "public". Por fim, desafiam os espectadores a criar o campo de texto à direita do header.

### Aula 02 - Base da barra lateral - Video 2

Nesta aula, os instrutores discutem a construção da barra lateral de um projeto chamado SpaceApp. Eles explicam que a barra lateral será fixa e estática, e que por enquanto não haverá animações ou alterações nela. O objetivo é criar a estrutura básica da barra lateral, utilizando tags HTML como aside, nav, ul, li e a. Eles mostram como criar um novo componente chamado BarraLateral e como inseri-lo no arquivo principal App.jsx. Em seguida, eles falam sobre a estilização da barra lateral, removendo os estilos padrões e aplicando estilos personalizados utilizando a biblioteca styled-components. Eles explicam como remover o sublinhado dos links e definir a largura da lista. Por fim, eles mencionam a necessidade de evoluir o item de lista, transformando-o em um componente separado.

### Aula 02 - Estrutura do item de navegação - Video 3

Nesta aula, Vinicios e João discutem e desenvolvem o componente "ItemNavegacao" para a barra lateral do aplicativo Space App. Eles explicam a importância de diferenciar os estados ativo e inativo dos itens de navegação e mostram como programar e estilizar corretamente esse componente. Eles também mencionam a necessidade de adicionar os ícones ao projeto e explicam como fazer isso.

### Aula 02 - Importando as fontes do projeto #1 - Video 4

Nesta aula, os instrutores discutem sobre a aplicação de estilos aos itens de uma lista de navegação em um projeto de desenvolvimento utilizando o styled-components. Eles abordam propriedades como font-size, line-height, margin-bottom, cursor e color, além de mostrar como alinhar elementos verticalmente utilizando display: flex e align-items: center. Também é mencionada a importação das fontes do projeto, que devem estar presentes no diretório do projeto e serem importadas nos estilos globais.

### Aula 02 - Importando as fontes do projeto #2 - Video 5

Nesta aula, os instrutores ensinam como importar fontes em um projeto utilizando CSS, React e styled-components. Eles mostram como utilizar a propriedade @font-face no arquivo index.jsx dos estilos globais para importar as fontes desejadas. Também explicam como declarar a font-family no CSS, utilizando a sintaxe local() para referenciar a fonte localmente e a URL da fonte importada. Além disso, mencionam a importância de utilizar diferentes formas de passar a fonte para garantir um fallback adequado. Por fim, é proposto um desafio para importar uma imagem de banner e combiná-la com o styled-components.

### Aula 02 - Para saber mais: fontes e suas possíveis extensões

TrueType Font (TTF): É um formato de fonte amplamente utilizado em sistemas operacionais Windows e Mac. É compatível com a maioria dos programas e oferece suporte a recursos avançados, como kerning e hinting.

OpenType Font (OTF): É um formato de fonte desenvolvido pela Adobe e pela Microsoft, que combina os recursos do TrueType e do formato PostScript. O OpenType oferece suporte a recursos avançados, como ligaturas, glifos alternativos e fontes com múltiplos idiomas.

PostScript Font (PS): É um formato de fonte desenvolvido pela Adobe. As fontes PostScript são amplamente utilizadas em impressoras e gráficos profissionais. Elas são baseadas em vetores e fornecem alta qualidade de impressão.

Web Open Font Format (WOFF): É um formato de fonte especialmente projetado para uso na web. O WOFF comprime as fontes para um tamanho menor, o que resulta em tempos de carregamento mais rápidos para páginas da web. O WOFF2 é uma versão mais recente e eficiente do WOFF.

### Aula 02 - Nessa aula, você aprendeu como`:`

Criar e estilizar o componente cabeçalho;
Estruturar a barra lateral;
Criar um item de lista que recebe um texto e uma imagem;
Importar fontes e defini-las como padrão.

## Aula 03 - Criando a Galeria

### Aula 03 - Montando o layout desktop - Video 1

Nesta aula, os instrutores discutem sobre a estrutura e o layout do projeto SpaceApp. Eles utilizam propriedades CSS como "position", "max-width", "margin", "display: flex", "gap", "flex-direction" e "flex-grow" para posicionar os elementos de forma fluida e responsiva. Eles também mencionam a importância de criar contêineres e evitar a codificação rígida. No final, eles ajustam o tamanho do banner e mencionam que é possível controlar o fluxo do "flex" utilizando outras propriedades.

### Aula 03 - Estruturando a galeria - Video 2

Nesta aula, os instrutores discutem a importância da criação de contêineres para posicionar corretamente os elementos de um projeto. Eles mostram como utilizar o styled-components para estilizar componentes e criar componentes reutilizáveis. Além disso, eles demonstram como personalizar propriedades como o alinhamento do título. No final, mencionam que o próximo passo será tratar as tags e adicionar os filtros das imagens no futuro.

### Aula 03 - Lidando com as tags - Video 3

Nesta aula, os instrutores João Vitor Pereira e Vinicios Neves discutem sobre a configuração das tags em um aplicativo chamado SpaceApp. Eles explicam que estão trabalhando com arquivos estáticos, mais especificamente um arquivo JSON chamado "tags.json". Esse arquivo contém um array de objetos, onde cada objeto representa uma tag com um ID e um título. Vinicios mostra como importar o arquivo JSON no código do aplicativo e como renderizar as tags na tela utilizando o método map(). Eles também mencionam que os arquivos estáticos não são modificados dinamicamente e que é necessário realizar um novo deploy da aplicação caso haja alguma mudança. O próximo passo será estilizar as tags de acordo com o layout do aplicativo no Figma, utilizando o Styled Components.

### Aula 03 - Importando fotos - Video 4

Nesta aula, os instrutores discutiram sobre a adição de imagens em um projeto chamado Space App. Eles explicaram que as imagens são armazenadas em um arquivo JSON e que é necessário ter cuidado ao manipulá-las. Os instrutores mostraram como importar as fotos do arquivo JSON e como utilizar o useState para gerenciar o estado das fotos. Em seguida, eles mostraram como passar as fotos para o componente Galeria e como renderizar os títulos das fotos. Também mencionaram a criação do componente Imagem, que representa uma imagem da galeria.

### Aula 03 - Para saber mais: responsividade com styled-components

Sabemos que um requisito fundamental na hora de criar uma aplicação web é a responsividade. Essa capacidade de uma aplicação se adaptar automaticamente a diferentes tamanhos de tela e dispositivos, proporciona uma experiência de usuário otimizada em cada um deles. Então, aqui vai um spoiler de como utilizar o styled-components de forma responsiva:

Utilizando Media Queries:
Você pode utilizar as Media Queries do CSS dentro do styled-components para aplicar estilos específicos para diferentes tamanhos de tela. Através da interpolação, você pode definir as regras de estilo para cada Media Query de forma responsiva.

### Aula 03 - Nessa aula, você aprendeu como:

Montar um layout desktop;
Estruturar o código de uma galeria de fotos com Flexbox;
Trabalhar com tags dinamicamente;
Importar fotos de um arquivo estático .json.

## Aula 04 - Um Modal de Zoom

### Aula 04 - Um diálogo para a todos governar - Video 1

Nesta aula, Vinicios e João Vitor discutem sobre a implementação de uma modal de zoom em um aplicativo chamado Space App. Eles explicam a importância de utilizar os elementos corretos da HTML, consultam a documentação do Mozilla como referência, mostram como transformar o exemplo da documentação em um componente React e trazem a modal para o arquivo principal do aplicativo.

### Aula 04 - O estado da modal - Video 2

Nesta aula, os instrutores discutem sobre como transferir uma modal do HTML para o código React e como gerenciar o estado dela. Eles utilizam o estado do React chamado "fotoSelecionada" para associar o estado da modal a uma imagem selecionada para zoom. Também adicionam um evento "aoZoomSolicitado" na galeria e na imagem para selecionar a imagem e fazer com que a galeria indique a foto selecionada. Por fim, mencionam a técnica do "Prop Drilling" para passar props de um componente para outro e afirmam que o tratamento de seleção de imagem está funcionando corretamente.

### Aula 04 - Fundo com opacidade - Video 3

Nesta aula, os instrutores discutem sobre a implementação de uma interface modal em um aplicativo. Eles mostram como abrir e fechar a modal, passar propriedades para o componente de imagem e resolver um erro relacionado à leitura de propriedades nulas. Em seguida, eles começam a estilizar a modal, criando um overlay com opacidade reduzida e posicionando corretamente o diálogo. Eles também explicam a importância do overlay como uma camada de bloqueio e utilizam o posicionamento fixo para garantir que o diálogo fique sobreposto à página. Além disso, eles propõem um desafio para estilizar a imagem e a barra de populares do aplicativo.

### Aula 04 - Nessa aula, você aprendeu como:

Criar uma modal com o elemento Dialog;
Trabalhar com eventos de seleção;
Posicionar elementos de forma fixa e definir opacidade com rgba;
Criar um estado que representa o elemento selecionado.

## Aula 05 - Favoritando as Imagens

### Aula 05 - Hora de favoritar - Video 1

Nesta aula, João e Vinicios discutem sobre a implementação da funcionalidade de alternância de favoritos em uma galeria de imagens. Eles explicam que é necessário implementar um método chamado "aoAlternarFavorito" que receberá a foto como parâmetro. Eles mostram como passar essa função para os componentes da galeria e da imagem, para que a alternância de favoritos possa ser acionada. Além disso, eles explicam que o componente App é responsável pelo controle do estado da aplicação e todas as propriedades e verificações precisam originar-se dele. No final, eles corrigem um erro no código para obter a foto correta ao alternar o favorito.

### Aula 05 - Alternando o favoritismo - Video 2

Nesta aula, os instrutores discutem a implementação do método que controla o favoritismo das fotos em um aplicativo. Eles explicam passo a passo como realizar essa implementação, mostrando trechos de código e explicando a lógica por trás de cada etapa. Primeiro, eles mostram o trecho de código onde é definido o método aoAlternarFavorito, responsável por alternar o favoritismo de uma foto. Em seguida, eles explicam como atualizar a propriedade favorita de cada foto utilizando o método .map. Eles também mostram como implementar a atualização do ícone de favorito na interface do aplicativo. Por fim, eles mencionam um bug a ser corrigido relacionado à manutenção do estado das fotos.

### Aula 05 - Caça aos bugs - Video 3

Nesta aula, João e Vinicios discutem um problema relacionado à cor do console em um aplicativo. Eles identificam que a função aoAlternarFavorito não está sendo chamada corretamente ao clicar na imagem. Para resolver isso, eles propõem verificar no modal se o método está passando a propriedade correta para o componente de imagem. Eles também identificam que a imagem selecionada não está sendo atualizada corretamente e resolvem esse problema adicionando uma verificação no aoAlternarFavorito para atualizar o estado apenas se o "id" da foto for igual à foto selecionada. Eles mencionam alternativas para controlar o estado de forma diferente e recomendam que os espectadores pesquisem mais sobre essas opções. Por fim, eles mencionam os próximos desafios do projeto e encorajam os espectadores a compartilharem suas soluções nas redes sociais e no Discord.

### Aula 05 - Para saber mais: useState e useEffect

useState
O useState é usado para adicionar estado aos componentes funcionais do React. Você pode usar essa função para criar uma variável de estado e uma função para atualizá-la. Por exemplo, você pode criar um contador em um componente e atualizá-lo quando um botão for clicado.

useEffect
Já o useEffect é usado para executar ações extras em um componente funcional. Por exemplo, você pode usá-lo para buscar dados de uma API assim que o componente for exibido na tela. É como um bloco de código que é executado automaticamente em determinados momentos.

Artigo [React Hooks: o que é e como funcionam?](https://www.alura.com.br/artigos/react-hooks)
Alura+ [Hooks do React: useState](https://cursos.alura.com.br/extra/alura-mais/hooks-do-react-usestate-c1530)

### Aula 05 - Filtrando tudo

Você está desenvolvendo uma aplicação React que exibe uma lista de produtos e deseja implementar a funcionalidade de filtro. Para isso, você decide utilizar os métodos map() e useEffect(). Qual é a finalidade desses métodos no contexto do filtro de produtos?

O método map() é usado para renderizar os elementos da lista de produtos, enquanto o useEffect() é usado para aplicar o filtro nos produtos quando ocorrerem mudanças no estado do filtro.

### Aula 05 - Nessa aula, você aprendeu como:

Corrigir bugs implementando a validação baseada no zoom da foto;
Implementar um map que compara dois parâmetros da foto;
Criar método de alternar favorito;
Aplicar método na galeria e na modal.

### Aula 05 - Conclusão - Video 3

Nesta aula, João e Vinicios parabenizam o aluno pela conclusão do curso e pelo término do projeto do Space App, uma galeria de imagens relacionadas ao espaço. Eles discutem sobre as tecnologias e conceitos utilizados, como a criação do projeto com Vite, a incorporação do Styled Components para estilizar os componentes, a criação de uma galeria de componentes atraentes e uma modal de estilos para expandir imagens e adicionar favoritos. Além disso, eles exploraram a manipulação de arquivos estáticos, trabalhando com imagens e arquivos JSON, e integraram essas técnicas com o estado do React. Eles também mencionam a importância de utilizar componentes semânticos do HTML, como o elemento dialog, na criação de uma modal personalizada. Após a conclusão do projeto, eles compartilham o Space App com o mundo utilizando o GitHub e a Vercel para publicá-lo de forma gratuita. Eles desafiam o aluno a criar sua própria versão do aplicativo e compartilhá-la nas redes sociais. Por fim, eles agradecem ao aluno e se despedem.
