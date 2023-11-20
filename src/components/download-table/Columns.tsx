"use client";

import { ColumnDef } from "@tanstack/react-table";

import IdCell from "./CellRenderers/IdCell";
import LinkCell from "./CellRenderers/LinkCell";
import RowActionsCell from "./CellRenderers/RowActionsCell";
import StatusCell from "./CellRenderers/StatusCell";

export const columns: ColumnDef<Download>[] = [
  {
    header: "Id",
    cell: IdCell,
  },
  {
    accessorKey: "link",
    header: "Link",
    cell: LinkCell,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusCell,
  },
  {
    id: "actions",
    cell: RowActionsCell,
  },
];
