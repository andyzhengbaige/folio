import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";




export default async function Home() {

  return (
    <main>
      <div className="container items-center content-center box-border h-280 w-320 p-4 sm mx-auto object-center justify-center flex flex-col">
        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs flex flex-col">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}


