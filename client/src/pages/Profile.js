import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';

const comments = [{
    id: "1",
    commentTitle: "Five stars",
    commentBody: "I am very happy with this therapist!",
    commenter: "Tester N."
}]

const Profile = () => {
    const { therapistId } = useParams();
    const [therapist, setTherapist] = useState(null);

    useEffect(() => {
        const fetchTherapist = async () => {
            try {
                const response = await fetch(`/api/therapists/${therapistId}`);
                const data = await response.json();
                setTherapist(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTherapist();
    }, [therapistId]);

    return (
        <section style={{ backgroundColor: '#eee' }} className='mt-5'>
          <MDBContainer className="py-5">
          {therapist && (
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid />
                    <p className="text-muted mb-1">{therapist.name}</p>
                    <p className="text-muted mb-4">{therapist.specialty}</p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Bio</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{therapist.bio}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Location</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{therapist.location}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
    
              </MDBCol>
            </MDBRow>
          )}
          </MDBContainer>
        </section>
        );
    };
    export default Profile;