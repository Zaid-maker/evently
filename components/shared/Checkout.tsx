import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import { Button } from "../ui/button";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  return (
    <form method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        Get Tickets
      </Button>
    </form>
  );
};

export default Checkout;
