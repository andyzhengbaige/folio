import { SignInButton, SignOutButton, UserButton, auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";




export default async function Home() {
  // returns information on current user, null if signed out
  const user = await currentUser();

  return (
    <main className="min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex container bg-white/10 mx-auto rounded-full items-center">
        <div className="justify-center w-15 h-15 p-3">
          <UserButton />
        </div>
        <div className="rounded-full bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/20 h-10">
          <span className="align-top md:align-top">
            {!user && <SignInButton />}
            {user && <SignOutButton />}
          </span>
        </div>
      </div>
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


