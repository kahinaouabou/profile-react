import React from 'react'
import {
    MDBRow, MDBCol, MDBCardText, 
} from 'mdb-react-ui-kit'
export default function FullName() {
  return (
    <MDBRow>
    <MDBCol sm="3">
      <MDBCardText>Full Name</MDBCardText>
    </MDBCol>
    <MDBCol sm="9">
      <MDBCardText className="text-muted">OUABOU Kahina</MDBCardText>
    </MDBCol>
  </MDBRow>
  )
}
