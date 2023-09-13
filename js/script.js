<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Jogo da Memória</title>
</head>
<body>
    <div class="placar">
        <h1>Olá, Jogador</h1>
        <p>Número de pares encontrados: <span id="contador"></span></p>
        <p id="vitoria"></p>
    </div>
    <!-- Section, ou seção, faz parte da atualização que veio com o HTML5. Essa tag indentifica uma seção do layout da sua página e é
    mais indicado utilizá-la por boas práticas. Ao invés de utilizar apenas de "div's", principalmente para "agrupar" um conjunto de "div's",
    use Section ou outra tag semântica que faça sentido de acordo com o layout desenvolvido, como header, aside, article e footer."-->
    <section class="jogo_memoria">
        <div class="carta_jogo" data-imagem="pessoa"> <!--Essa div representa uma carta dentro da nossa matriz de cartas-->
            <!--Ela possui duas imagens, uma que será o verso da carta e outra que será a frente-->
            <img class="frente_carta" src="./img/img_1_pessoa.jpg" alt="Ilustração colorida de um grupo de pessoas conversando"> <!--Frente-->
            <!-- O "class" é um elemento que torna tags parte de alguma classe, um grupo, que pode ser nomeado e acessado no sua estilização 
            CSS ou no seu script-->
            <!--O "alt" é um atributo de acessibilidade. Ele permite que leitores de tela identifiquem o conteúdo de uma imagem para pessoas
            com algum tipo de deficiência visual, principalmente-->
        </div>
        <div class="carta_jogo" data-imagem="pessoa"> <!-- O data-imagem é o atributo data-* que permite adicionar 
            dados personalizados em um elemento no HTML-->
            <img class="frente_carta" src="./img/img_1_pessoa.jpg" alt="Ilustração colorida de um grupo de pessoas conversando">
        </div>
        <div class="carta_jogo" data-imagem="maos">
            <img class="frente_carta" src="./img/img_2_maos.jpg" alt="Ilustração colorida de uma mão segurando um celular">
        </div>
        <div class="carta_jogo" data-imagem="maos">
            <img class="frente_carta" src="./img/img_2_maos.jpg" alt="Ilustração colorida de uma mão segurando um celular">
        </div>
        <div class="carta_jogo" data-imagem="bike">
            <img class="frente_carta" src="./img/img_3_bike.jpg" alt="Ilustração colorida de uma pessoa pedalando">
        </div>
        <div class="carta_jogo" data-imagem="bike">
            <img class="frente_carta" src="./img/img_3_bike.jpg" alt="Ilustração colorida de uma pessoa pedalando">
        </div>
        <div class="carta_jogo" data-imagem="natal">
            <img class="frente_carta" src="./img/img_4_natal.jpg" alt="Ilustração colorida de pessoas ao redor de uma árvore de natal">
        </div>
        <div class="carta_jogo" data-imagem="natal">
            <img class="frente_carta" src="./img/img_4_natal.jpg" alt="Ilustração colorida de pessoas ao redor de uma árvore de natal">
        </div>
        <div class="carta_jogo" data-imagem="pascoa">
            <img class="frente_carta" src="./img/img_5_pascoa.jpg" alt="Ilustração colorida de uma mensagem de Feliz Páscoa em inglês">
        </div>
        <div class="carta_jogo" data-imagem="pascoa">
            <img class="frente_carta" src="./img/img_5_pascoa.jpg" alt="Ilustração colorida de uma mensagem de Feliz Páscoa em inglês">
        </div>
        <div class="carta_jogo" data-imagem="laptop">
            <img class="frente_carta" src="./img/img_6_laptop.jpg" alt="Ilustração colorida de uma pessoa usando um laptop">
        </div>
        <div class="carta_jogo" data-imagem="laptop">
            <img class="frente_carta" src="./img/img_6_laptop.jpg" alt="Ilustração colorida de uma pessoa usando um laptop">
        </div>
        <div class="carta_jogo" data-imagem="lampada">
            <img class="frente_carta" src="./img/img_7_lampada.jpg" alt="Ilustração colorida de uma garota segurando uma lâmpada">
        </div>
        <div class="carta_jogo" data-imagem="lampada">
            <img class="frente_carta" src="./img/img_7_lampada.jpg" alt="Ilustração colorida de uma garota segurando uma lâmpada">
        </div>
        <div class="carta_jogo" data-imagem="garota">
            <img class="frente_carta" src="./img/img_8_garota.jpg" alt="Ilustração colorida de uma garota de costas usando um laptop">
        </div>
        <div class="carta_jogo" data-imagem="garota">
            <img class="frente_carta" src="./img/img_8_garota.jpg" alt="Ilustração colorida de uma garota de costas usando um laptop">
        </div>
        <div class="carta_jogo" data-imagem="mesa">
            <img class="frente_carta" src="./img/img_9_mesa.jpg" alt="Ilustração colorida de uma pessoa sentada em uma mesa">
        </div>
        <div class="carta_jogo" data-imagem="mesa">
            <img class="frente_carta" src="./img/img_9_mesa.jpg" alt="Ilustração colorida de uma pessoa sentada em uma mesa">
        </div>
        <div class="carta_jogo" data-imagem="garota_celular">
            <img class="frente_carta" src="./img/img_10_garota.jpg" alt="Ilustração colorida de uma garota segurando um celular">
        </div>
        <div class="carta_jogo" data-imagem="garota_celular">
            <img class="frente_carta" src="./img/img_10_garota.jpg" alt="Ilustração colorida de uma garota segurando um celular">
        </div>
    </section>    
    
    <script src="./js/script.js"></script><!-- O script deve ser conectado dentro da tag body, 
    mas pode ser inserido na tag head, lembrando de adicionar o elemento defer antes do "src". Por que dessa forma o navegador entende
    que deve processar todo o HTML antes de executar o script. -->
</body>
</html>
