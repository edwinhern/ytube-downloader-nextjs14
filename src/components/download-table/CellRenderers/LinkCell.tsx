import { Row } from "@tanstack/react-table";

const LinkCell = ({ row }: { row: Row<Download> }) => {
  const link = row.original.link;
  return (
    <div className="flex">
      <span className="max-w-[200px] sm:max-w-sm md:max-w-lg lg:max-w-4xl truncate">
        {link}
      </span>
    </div>
  );
};

export default LinkCell;
