<template>
  <div>
    <i v-for="estrela in estrelas" :key='estrela.id' :class="estrela.estilo" @click="marcarAvaliacao(estrela.id)"></i>
  </div>
</template>

<script>
export default {
  name: 'InputEstrelas',
  props: {
    numeroEstrelas: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    estrelas: [],
    avaliacao: 0
  }),
  created() {
    this.iniciarEstrelas();
  },
  methods: {
    iniciarEstrelas() {
      for(let i = 0; i < this.numeroEstrelas; i++) {
        this.estrelas[i] = { id: i, estilo: 'bi bi-star estrela' } //Monta quantidade de estrelas para avaliação
      }
    },
    marcarAvaliacao(e) {
      this.iniciarEstrelas(); //Resetando estrelas
      this.avaliacao = e + 1; //Indice começa em zero
      for(let i = 0; i < this.avaliacao; i++) {
        this.estrelas[i].estilo = 'bi bi-star-fill estrela preenchida' //Altera o ícone de estrelas para estrelas preenchidas
      }

      // Emitindo um evento chamado avaliar
      // this.$emit('avaliar', this.avaliacao);

      this.$emit('update:avaliar', this.avaliacao);
    }
  }
}
</script>

<style scoped>
.estrela {
  font-size: 1.5rem;
  color: #999;
  margin-left: 1px;
  margin-right: 1px;
}
.preenchida {
  color: #fc0;
}
</style>