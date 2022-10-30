import React from 'react'
import {MDBRow, MDBCol,MDBCardText }  from 'mdb-react-ui-kit'
export default function Address() {
  return (
    <MDBRow>
    <MDBCol sm="3">
      <MDBCardText>Address</MDBCardText>
    </MDBCol>
    <MDBCol sm="9">
      <MDBCardText className="text-muted">Ain Benian Alger</MDBCardText>
    </MDBCol>
  </MDBRow>
  )
}
