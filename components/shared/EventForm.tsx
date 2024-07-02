"use client";

import { IEvent } from "@/lib/database/models/event.model";
import React from "react";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IEvent;
  eventId?: string;
};

const EventForm = ({}: EventFormProps) => {
  return <div>EventForm</div>;
};

export default EventForm;
