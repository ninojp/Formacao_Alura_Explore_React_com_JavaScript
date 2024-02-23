import './Banner.css';
function Banner(){
    //JSX é como é chamado essa mistura de HTML, CSS e JavaScript que o React interpreta
    //Os parenteses neste retorno permite um codigo com multiplas linhas
    return (
        //No React usamos className para definir uma classe(pois class é uma palavra reservada do JavaScript) 
        <header className='banner'>
            <img src='/imgs/banner.png' alt='Imagem do banner' />
        </header>
    );
};
export default Banner;

//========================================================================================
// Outra forma muito usada no mercado trabalho é: usando um index.js apenas para exportar
// usado normalmente em COMPOSIÇÃO de componentes, para exportar apenas os convenientes e não expor todos globalmente
export const Banner2 = () => {
    return (
        // IMPORTANTE!, não se deve colocar dois elementos HTML SEPARADOS(um abaixo do outro)
        // Para se usar elementos separados deve-se 'ENVELOPAR', com uma <div> ou um container <section>...
        // O React tem para isso o <Fragment> elementos html... </Fragment> ou <> elementos html... </>  
        <header className='banner'>
            <img src='/imgs/banner.png' alt='Imagem do banner' />
        </header>

    );
}