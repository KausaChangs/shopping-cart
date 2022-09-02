import { Offcanvas, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { CartItem } from "./cartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
