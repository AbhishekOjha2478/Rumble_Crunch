import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const err = useRouteError();
  return (
    <div>
        <h1>OOps!!! something wrong</h1>
        <h2>{err.status} {err.statusText}</h2>
    </div>
  )
}
