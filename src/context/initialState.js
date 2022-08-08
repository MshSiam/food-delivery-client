import { fetchCart, fetchUser } from "../utilities/fetchLocalStorage"

const userInfo = fetchUser()
const cartInfo = fetchCart()

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo
}
