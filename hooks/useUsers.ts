import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { API_URL } from "@/constants";
import { User } from "@/types";

export function useUsers() {
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/users`);
      return res.json();
    },
  });

  const mutation = useMutation<User, Error, User>({
    mutationFn: async (newUser: User) => {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error("Failed to add user");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    },
  });

  return {
    users,
    isLoading,
    addUser: mutation.mutate,
    isAddingUser: mutation.isPending,
  };
}
