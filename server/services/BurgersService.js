import { fakeDb } from "../db/FakeDb.js"

class BurgersService{
  createBurger(burger) {
    burger.id = Math.floor(Math.random()*100000000000)
    fakeDb.burgers.push(burger)
    return burger
  }
  getBurgers() {
    const burgers = fakeDb.burgers
    return burgers
  }

}

export const burgersService = new BurgersService()