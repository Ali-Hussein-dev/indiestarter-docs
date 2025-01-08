import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-extrabold md:text-4xl lg:text-5xl">
        Indie Starter Docs
      </h1>
      <div className="flex gap-5 mx-auto">
        <Link href="/docs" className="text-fd-foreground text-xl">
          Get started
        </Link>
        <a
          href="https://indie-starter.dev/templates"
          className="text-fd-foreground text-xl"
        >
          Check templates
        </a>
      </div>
    </main>
  )
}
