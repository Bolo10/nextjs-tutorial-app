import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <section className="flex h=[calc(100vh-7rem)] h-screen justify-center items-center">
      <div className="text-cente">
        <h1 className="text-4xl font-bold">Not Found</h1>
        <Link href="/" className="r text-slate-400 font-bold text-2xl mt-5">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
