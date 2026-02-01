import css from "./Page.module.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api/noteService";
import NoteDetailsClient from "./NoteDetails.client";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const id = (await params).id;

  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["getNoteDetail", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <div className={css["page"]}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
