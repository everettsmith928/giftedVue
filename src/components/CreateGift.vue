<template>
  <form @submit.prevent="createGift(newGift)" class="row">
    <input v-model="newGift.tag" class="col-12" type="text" name="tag" placeholder="Tagline">
    <p class="text-light">{{ newGift.tag }}</p>
    <input v-model="newGift.url" class="col-12" type="text" name="url" placeholder="Gif Link">
    <p class="text-light">{{ newGift.url }}</p>
    <button type="submit" class="btn btn-success">Create</button>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { giftsService } from "../services/GiftsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";

export default {
  setup() {
    let newGift = ref({})
    return {
      async createGift(newGift) {
        logger.log(newGift)
        logger.log('Creating a gift...')
        try {
          await giftsService.createGift(newGift)
        } catch (error) {
          Pop.error(error)
        }
      },
      newGift
    };
  },
};
</script>


<style></style>