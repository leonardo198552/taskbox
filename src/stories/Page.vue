<template>
  <article>
    <my-header
      :user="user"
      @onLogin="onLogin"
      @onLogout="onLogout"
      @onCreateAccount="onCreateAccount"
    />

    <section>
      <h2>A História da<em> Humanidade</em></h2>
      <p>
        É incrível tudo isso.
        <a href="#" target="_blank" rel="noopener noreferrer">
          <strong>A história da humanidade</strong>
        </a>
        A história da humanidade está repleta de momentos marcantes que moldaram o mundo em que vivemos hoje..
      </p>
      <p>
        Desde a descoberta do fogo até a exploração espacial, os seres humanos têm sido capazes de superar 
        desafios incríveis ao longo do tempo. No entanto, a história também é repleta de conflitos, guerras
        e injustiças que deixaram marcas profundas em nossa sociedade.
      </p>
      <ul>
        <li>
          Guerras mundiais, genocídios e regimes totalitários são apenas alguns exemplos dessas situações terríveis
           que a humanidade teve que enfrentar. 
        </li>
        <li>
          Apesar desses momentos sombrios, também há muitas histórias de esperança, coragem e superação que mostram a
          capacidade da humanidade de se unir e enfrentar grandes desafios. A luta pelos direitos civis, a abolição
          da escravatura e a queda do apartheid são apenas alguns exemplos dessas vitórias históricas.
        </li>
      </ul>
      <p>
        No final, a história nos ensina que o progresso humano não é fácil nem linear. É um processo contínuo que envolve
        altos e baixos, avanços e retrocessos. Mas com coragem, determinação e compaixão, podemos trabalhar juntos para 
        construir um mundo melhor para todos."
        <a href="#" target="_blank" rel="noopener noreferrer"
          >Esse é o fim do meu discurso</a
        >
        . Vou adicionar um link aqui, só pra exemplo desse site, pois, são componentes e preciso testar tudo.
        <a href="#" target="_blank" rel="noopener noreferrer">Teste Link</a>
        .
      </p>
      <div class="tip-wrapper">
        <span class="tip">Teste Link</span>
        Bora pra cima q tamo ganhando o jogo.
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Obrigado, Deus!
      </div>
    </section>
  </article>
</template>

<script>
import './page.css';
import MyHeader from './Header.vue';

export default {
  name: 'my-page',

  components: { MyHeader },

  data() {
    return {
      user: null,
    };
  },

  methods: {
    onLogin() {
      this.user = { name: 'Leonardo J. Andrade.' };
    },
    onLogout() {
      this.user = null;
    },
    onCreateAccount() {
      this.user = { name: 'Leonardo J. Andrade' };
    },
  },
};
</script>
