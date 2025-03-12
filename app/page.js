import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col bg-slate-950 p-4">
      <h1 className="font-bold text-3xl text-white p-4">CPRG-306: Web Development 2 - Assignments</h1>
      <p className="text-white">
        Link to week 2: 
      </p>
      <Link className="text-white" href="week-2">Week 2 Page</Link>
      <Link className="text-white" href="week-3">Week 3 Page</Link>
      <Link className="text-white" href="week-4">Week 4 Page</Link>
      <Link className="text-white" href="week-5">Week 5 Page</Link>
      <Link className="text-white" href="week-6">Week 6 Page</Link>
      <Link className="text-white" href="week-7">Week 7 Page</Link>
      <Link className="text-white" href="week-8">Week 8 Page</Link>
      <Link className="text-white" href="week-9">Week 9 Page</Link>
      <Link className="text-white" href="week-10">Week 10 Page</Link>
      <Link className="text-white" href="week-11">Week 11 Page</Link>
      </section>
    </main>
  );
}
