import React from 'react'
import {
    MDBBreadcrumb, MDBBreadcrumbItem   
} from 'mdb-react-ui-kit'
export default function Breadcrumb() {
  return (
    <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
    <MDBBreadcrumbItem>
      <a href='#'>Home</a>
    </MDBBreadcrumbItem>
    <MDBBreadcrumbItem>
      <a href="#">User</a>
    </MDBBreadcrumbItem>
    <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
  </MDBBreadcrumb>
  )
}
