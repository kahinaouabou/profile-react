import React from 'react'
import { MDBRow, MDBCol, MDBCardText  } from 'mdb-react-ui-kit'
export default function Email() {
  return (
    <MDBRow>
    <MDBCol sm="3">
      <MDBCardText>Email</MDBCardText>
    </MDBCol>
    <MDBCol sm="9">
      <MDBCardText className="text-muted">k_ouabou@esi.dz</MDBCardText>
    </MDBCol>
  </MDBRow>
  )
}
