import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';
const Profile = () => {
    const { therapistId } = useParams();
    const [therapist, setTherapist] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [commenter, setCommenter] = useState("");
    useEffect(() => {
        const fetchTherapist = async () => {
            try {
                const response = await fetch(`/api/therapists/${therapistId}`);
                const data = await response.json();
                setTherapist(data);
                setComments(data.comments);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTherapist();
    }, [therapistId]);

    // Plug this in to the "Add Comment" button
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const newCommentObj = {
            commentBody: newComment,
            commenter: commenter,
        };
        try {
            const response = await fetch(`/api/therapists/${therapistId}/comments`, {
                method: "POST",
                body: JSON.stringify(newCommentObj),
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            setComments([...comments, data]);
            setNewComment("");
            setCommenter("");
        } catch (error) {
            console.log(error);
        }
    };
    const handleCommentDelete = async (commentId) => {
        try {
            const response = await fetch(`/api/therapists/${therapistId}/comments/${commentId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setComments(comments.filter((comment) => comment._id !== commentId));
            }
        } catch (error) {
            console.log(error);
        }
    };
    console.log(comments);

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
                {/* Starting */}
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
                {/* Ending */}
                </MDBRow>
            )}

            <h3>Comments</h3>
            {comments.map((commentItem) => (
                <MDBCol lg="8" key={commentItem._id}>
                    <MDBCard className="mb-4">
                    <MDBCardBody>
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Comments</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">{commentItem.commentBody}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Commenter</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">{commentItem.commenter}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        <button onClick={() => handleCommentDelete(commentItem._id)}>Delete</button>
                        </MDBRow>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}

            <form onSubmit={handleCommentSubmit}>
                <input
                type="text"
                placeholder="Comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                />
                <input
                type="text"
                placeholder="Your name"
                value={commenter}
                onChange={(e) => setCommenter(e.target.value)}
                />
                <button type="submit">Add Comment</button>
            </form>
            </MDBContainer>
        </section>
    );
};
export default Profile;