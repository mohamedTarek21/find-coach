<template>
  <section>Filter</section>
  <base-card>
    <section>
      <div>
        <base-button mode='outline'>Refresh</base-button>
        <base-button link to="/register">register as coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coaches-view
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :hourly-rate="coach.hourlyRate"
          :areas="coach.areas"
        >
        </coaches-view>
      </ul>
      <h3 v-else>No coaches to show</h3>
    </section>
  </base-card>
</template>

<script>
import coachesView from '../../components/coaches/coachesView.vue';

export default {
  components: {
    coachesView,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  mounted() {
    console.log(this.hasCoaches);
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
ul {
  list-style: none;
}
h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
