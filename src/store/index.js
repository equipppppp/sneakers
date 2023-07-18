import { createStore } from "vuex";
import BasketModule from "./BasketModule";
import SneakersModule from "./SneakersModule";
import OrdersModule from "./OrdersModule";
import SearchModule from "./SearchModule";

export default createStore({
  modules: {
    basket: BasketModule,
    sneakers: SneakersModule,
    orders: OrdersModule,
    search: SearchModule,
  },
});
