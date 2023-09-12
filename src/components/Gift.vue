<template>
  <div class="bg-dark gift-cards card elevation-3 p-2 my-2" @click="openGift(`${gift.id}`)">
    <p><i class="mdi mdi-gift"></i></p>
    <p>{{ gift.tag }}</p>
    <img :src="gift.url" class="img-fluid">

  </div>
</template>

<script>
import { Gift } from "../models/Gift";
import { giftsService } from "../services/GiftsService";


export default {
  props: { gift: { type: Gift, required: true } },
  setup() {
    return {
      // logger.log(props),
      async openGift(giftId) {
        await giftsService.openGift(giftId)
      }
    };
  },
};
</script>


<style></style>