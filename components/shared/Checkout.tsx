import { checkoutOrder } from "@/lib/actions/order.actions";
import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Get Tickets" : "Buy Tickets"}
      </Button>
    </form>
  );
};

export default Checkout;
