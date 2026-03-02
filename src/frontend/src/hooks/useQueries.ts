import { useMutation, useQuery } from "@tanstack/react-query";
import type { Mode, Subject } from "../backend.d";
import { useActor } from "./useActor";

export function useGetDemoBookingCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["demoBookingCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getDemoBookingCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (params: {
      name: string;
      phone: string;
      email: string | null;
      subject: Subject;
      preferredMode: Mode;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitInquiry(
        params.name,
        params.phone,
        params.email,
        params.subject,
        params.preferredMode,
        params.message,
      );
    },
  });
}
