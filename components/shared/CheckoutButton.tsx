"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CheckoutButton = () => {
  return (
    <div className="flex items-center gap-3">
      <SignedOut>
        <Button asChild size="lg" className="button rounded-full">
          <Link href="/sign-in">Get Tickets</Link>
        </Button>
      </SignedOut>

      <SignedIn>
        {/* <Checkout event={event} userId={userId} /> */}
        Checkout
      </SignedIn>
    </div>
  );
};

export default CheckoutButton;
