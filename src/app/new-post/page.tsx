import { MessageForm } from "~/components/MessageForm";

export default async function Home() {

  return (
    <main className="min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container text-center items-center h-auto">
        <div className="">Creating a new post</div>
        <span>&nbsp;&nbsp;</span>
        <div className="text-black">
          <MessageForm></MessageForm>
        </div>
      </div>
    </main>
  );
}