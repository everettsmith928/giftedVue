import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class GiftsService {
  async getGifts() {
    const res = await api.get('/api/gifts')
    AppState.gifts = res.data.map(gift => new Gift(gift))
    logger.log(AppState.gifts)
    logger.log(res.data)
  }

  async openGift(giftId) {
    let foundGift = AppState.gifts.find(gift => gift.id == giftId)
    foundGift.opened = true
    const res = await api.put(`api/gifts/${giftId}`, foundGift)
    let replaceGiftIndex = AppState.gifts.indexOf(foundGift)
    let openedGift = new Gift(res.data)
    AppState.gifts.splice(replaceGiftIndex, 1, openedGift)
    logger.log('opened gift and replaced in array', foundGift)
  }

  async createGift(newGift) {
    let res = await api.post(`api/gifts`, newGift)
    logger.log(res.data)
    let createdGift = new Gift(res.data)
    AppState.gifts.push(createdGift)
  }
}

export const giftsService = new GiftsService