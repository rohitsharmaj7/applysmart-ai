import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Apply Smart AI" },
    { name: "description", content: "Apply smart and get hired quickly!" },
  ];
}

export default function Home() {
  return (
  <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track your Application & Resume Rating</h1>
        <h2>Review you CV with AI powered feedback</h2>
      </div>
    </section>
  </main>);
}
