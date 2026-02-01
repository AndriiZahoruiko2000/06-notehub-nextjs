import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { getNotes } from "@/lib/api";

const Page = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["getNotes", 1, ""],
    queryFn: () => getNotes({ page: 1, search: "" }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />;
    </HydrationBoundary>
  );
};

export default Page;
