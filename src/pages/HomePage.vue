<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-8">
        <section class="row">
          <div class="col-4" v-for="g in gifts" :key="g.creatorId" :gift="g">
            <Gift :gift="g" />
          </div>


        </section>
      </div>
      <div class="col-4 bg-dark">
        <CreateGift />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { giftsService } from "../services/GiftsService"
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
export default {
  setup() {
    onMounted(getGifts)
    async function getGifts() {
      try {
        logger.log(`getting Movies..`)
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }

    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
