'use client';
import { useRouter, useParams } from 'next/navigation';
export default function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>

      <button
        className="bg-sky-300"
        onClick={() => {
          router.push('/');
        }}>
        click
      </button>
    </section>
  );
}
