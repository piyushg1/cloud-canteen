import { useDispatch, useSelector } from "react-redux"
import { ListGroupItem, ListGroup, Button } from "reactstrap"
import store from "../../data/store"
import { clearCart } from "../../data/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div style={{ margin: '5rem' }}>
            <h2>cart.</h2>
            <ListGroup
                numbered="true" style={{ margin: '5rem' }}
            >
                {cartItems.map((item, index) => {
                    return (
                        <ListGroupItem key={index}>
                            {item}
                        </ListGroupItem>
                    )
                })}

            </ListGroup>

            <div style={{ margin: '5rem', display: 'flex', justifyContent: 'space-between' }}>

                <Button color="success" outline='true' disabled='true'>
                    proceed
                </Button>
                <Button color="danger" outline='true' onClick={() => handleClearCart()}>
                    clear cart
                </Button>
            </div>
        </div>
    )
}
export default Cart