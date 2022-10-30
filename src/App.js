import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import Phone from "./Component/Profile/Phone";
import Email from "./Component/Profile/Email";
import Breadcrumb from "./Component/Breadcrumb";
import {
  MDBContainer,  MDBCol, MDBRow, MDBCard, MDBCardBody
} from 'mdb-react-ui-kit'
function App() {
  return (
  
      <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
          <Breadcrumb/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
    <MDBCol lg="4">
      <MDBCard className="mb-4">
        <ProfilePhoto/>
      </MDBCard>
    </MDBCol>
    <MDBCol lg="8">
      <MDBCard className="mb-4">
        <MDBCardBody>
            <FullName/>
          <hr />
         <Email/>
          <hr />
          <Phone/>
          <hr />
        
        <Address/>
        
        </MDBCardBody>
      </MDBCard>

   
    </MDBCol>
  </MDBRow>

        
      
       
      </MDBContainer>
    </section>
  );
}

export default App;
