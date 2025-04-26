"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";
import { IEvent } from "@/lib/database/models/event.model";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return (
    <div className="flex items-center gap-3">
      <SignedOut>
        <Button asChild size="lg" className="button rounded-full">
          <Link href="/sign-in">Get Tickets</Link>
        </Button>
      </SignedOut>

      <SignedIn>
        <Checkout event={event} userId={userId} />
      </SignedIn>
    </div>
  );
};

export default CheckoutButton;
