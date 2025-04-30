"use client";

import { User } from "@/types";
import { UserForm } from "@/components/forms/UserForm";
import { UserList } from "@/components/UserList";
import { useUsers } from "@/hooks/useUsers";

export default function UsersPage() {
  const { users, isLoading, addUser, isAddingUser } = useUsers();

  const handleAddUser = (newUser: User) => {
    addUser(newUser);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Users</h1>

      <UserForm onSubmit={handleAddUser} isLoading={isAddingUser} />
      <UserList users={users || []} isLoading={isLoading} />
    </div>
  );
}
