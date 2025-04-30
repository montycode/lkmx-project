import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { API_URL } from "@/constants";
import { User } from "@/types";

/**
 * Custom React Query hook to fetch and manage users.
 */
export function useUsers() {
  const queryClient = useQueryClient();

  /**
   * useQuery: Fetch the list of users from the API.
   * - `queryKey`: Used for caching and invalidation.
   * - `queryFn`: Fetches user data from the backend.
   */
  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/users`);
      return res.json();
    },
  });

  /**
   * useMutation: Create a new user.
   * - `mutationFn`: Sends a POST request to create the user.
   * - `onSuccess`: Invalidate the "users" query to refresh the list.
   * - `onError`: Log the error for debugging.
   */
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
      // Refetch users after successful creation
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    },
  });

  // Return data and mutation handlers for use in components
  return {
    users,
    isLoading,
    addUser: mutation.mutate,
    isAddingUser: mutation.isPending,
  };
}
