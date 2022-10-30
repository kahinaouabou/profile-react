import React from 'react'
import {MDBRow, MDBCol, MDBCardText}  from 'mdb-react-ui-kit';
export default function Phone() {
  return (
        <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Phone</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">0775 24 16 94</MDBCardText>
            </MDBCol>
        </MDBRow>
  )
}
