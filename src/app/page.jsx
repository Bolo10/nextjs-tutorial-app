'use client';

export default function HomePage() {
  return (
    <section>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          alert('Im from client');
        }}>
        button
      </button>
    </section>
  );
}
