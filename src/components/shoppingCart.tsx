import { Offcanvas, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
