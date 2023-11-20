import { columns } from "./Columns";
import { useDownload } from "./context/DownloadContext";
import { DataTable } from "./DataTable";

const DataTableContainer = () => {
  const { downloads } = useDownload();

  return <DataTable columns={columns} data={downloads} />;
};

export default DataTableContainer;
