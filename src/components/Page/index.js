import React from 'react';

function Page({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}

export default Page;