import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Error() {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!!! Something went wrong</h1>
      <h2 className="text-2xl text-gray-700">
        {err.status} {err.statusText}
      </h2>
    </div>
  );
}
