import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
  return (
    <div>
      <h1>OOps</h1>
      <p>Sorry,an unexpected has occured</p>
      <p>
        <i>{error.statusText||error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage