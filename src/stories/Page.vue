<template>
  <article>
    <my-header
      :user="user"
      @onLogin="onLogin"
      @onLogout="onLogout"
      @onCreateAccount="onCreateAccount"
    />

    <section>
      <h2>A História de<em> Leonard</em></h2>
      <p>
        É incrível tudo isso.
        <a href="#" target="_blank" rel="noopener noreferrer">
          <strong>Minha vida</strong>
        </a>
        Tem sido uma eventual constante desde quando eu tinha 12 anos.
      </p>
      <p>
        Bora pro jogo que tem ainda o segundo tempo inteiro pra gente ganhar. Saí de uma familia terrivel, onde não 
        tive estrutura nenhuma. Pais cachaceiros, colocava eu e meus irmãos, para pedir esmolas e trabalhar, enquanto eles ficavam 
        em casa bebendo cachaça.
      </p>
      <ul>
        <li>
          Toda vitória é incrível quando conseguimos vencer e, ser um exemplo para nossos filhos, comigo não é diferente.
          Agradeço muito a Deus por todo amadurecimento que ele me proporcionou todo esses anos. Deus me abençoou e me deu
          uma nova vida. Agradeço a ele todos os dias por isso.
        </li>
        <li>
          Em especial, queria agradecer ao <em>Kennedy T.</em> pois, foi graças a ele que eu pude conhecer esse mundo tão incrível
          que é a tecnologia. Sempre foi mais q um irmão pra mim. Sei q fui imaturo em coisas passadas com vc e sua familia, mas deixo aqui minhas
          sinceras desculpas e, digo q nunca foi minha intenção magoar ninguém.
        </li>
      </ul>
      <p>
        Obrigado mesmo, <em>Kennedy</em>! Se eu posso ter as coisas q não tive antes, é graças a vc que me fez conhecer isso que chamamos de tecnologia.
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
      this.user = { name: 'Kennedy T.' };
    },
    onLogout() {
      this.user = null;
    },
    onCreateAccount() {
      this.user = { name: 'Kennedy T.' };
    },
  },
};
</script>
