import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/types";
import { useForm } from "react-hook-form";
import { userSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

interface UserFormProps {
  readonly onSubmit: (data: User) => void;
  readonly isLoading: boolean;
}

export function UserForm({ onSubmit, isLoading }: UserFormProps) {
  const { register, handleSubmit, reset } = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className="space-y-4"
    >
      <Input placeholder="Name" {...register("name")} />
      <Input placeholder="Email" type="email" {...register("email")} />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add User"}
      </Button>
    </form>
  );
}
