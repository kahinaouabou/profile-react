import React from 'react'

import {
    MDBCardBody,
    MDBCardImage,
  } from 'mdb-react-ui-kit';

export default function ProfilePhoto() {
  return (
  
    <MDBCardBody className="text-center">
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4.webp"
            alt="avatar"
            className="rounded-circle"
            style={{ width: '150px' }}
            fluid />
          <p className="text-muted mb-1">Full Stack Developer</p>
          <p className="text-muted mb-4">An Benian Alger </p>
        
        </MDBCardBody>
 
 )
}
