import React from 'react'

export default function Alert({alert}) {
  return (
    <>
    { alert &&( <div className="containe">
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{alert.type}</strong> : {alert.msg}
         
        </div>
      </div>)}
    </>
  );
}
