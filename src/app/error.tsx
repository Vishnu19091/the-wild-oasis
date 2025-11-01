"use client";

/**
 * This error boundary/component 
 
 * **always needed to a client component**

 * This will not catch any error for the root layout

 * to do that you need to create **global-error.jsx/tsx/js** file

 * and that applies to the entire root layout
 */

export default function Error({ error, reset }: { error: any; reset: any }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
