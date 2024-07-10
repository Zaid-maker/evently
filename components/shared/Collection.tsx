import { IEvent } from "@/lib/database/models/event.model";
import React from "react";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
      <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
      <p className="p-regular-14">{emptyStateSubtext}</p>
    </div>
  );
};

export default Collection;
