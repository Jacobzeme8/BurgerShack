import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class BurgersController extends BaseController{

  constructor(){
    super('api/burgers')

    this.router
      .get('', this.getBurgers)
      .post('', this.createBurger)
  }

  getBurgers(req, res, next){
    try {
      let burgers = burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  createBurger(req, res, next){
    try {
      let burger = req.body
      logger.log(burger)
      let newBurger = burgersService.createBurger(burger)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }
}