import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart_icon.scss'

const CartIcon = () => {

  return (
    <div className='cart_icon_container' >
      <ShoppingIcon className='shopping_icon'/>
      <span className='item_count'></span>
    </div>
  )
}

export default CartIcon;