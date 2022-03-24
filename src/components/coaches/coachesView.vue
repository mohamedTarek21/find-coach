<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/hour</h4>
    <base-badge v-for="area in areas" :key="area" :type="area" :title="area">
      {{ area }}
    </base-badge>
    <div class="actions">
      <base-button link :to="contactLink" mode="outline"> Contact</base-button>
      <base-button link :to="detailsLink"> Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'hourlyRate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    detailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 1rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
