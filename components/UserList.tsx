import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";
import { TableSkeleton } from "@/components/skeletons/TableSkeleton";
import { User } from "@/types";

interface UserListProps {
  readonly users: User[];
  readonly isLoading: boolean;
}

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

export function UserList({ users, isLoading }: UserListProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-6 mb-2">User List</h2>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <DataTable columns={columns} data={users} />
      )}
    </div>
  );
}
