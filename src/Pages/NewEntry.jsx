import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import styled from "styled-components";
import { basedb, baseStorage } from "../Base";

const NewEntry = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const fileRef = ref(baseStorage, "/myImage", +file.name);
    const storageRef = uploadBytesResumable(fileRef, file);
    getDownloadURL(storageRef.snapshot.ref).then((url) => {
      setAvatar(url);
    });
  };

  const postData = async () => {
    addDoc(collection(basedb, "furniture"), {
      title,
      description,
      avatar: await avatar,
    });
    alert("Data Submitted");
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/new">
          <input type="file" onChange={uploadImage} />
          <br />
          <input
            type="Title"
            placeholder="Item Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            placeholder="Enter Item Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button onClick={postData}>SUBMIT</button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default NewEntry;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div``;
const Link = styled.div`
  button {
    width: 100px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    cursor: pointer;
    background-color: white;
    color: #0b3954;
    &:hover {
      background-color: #0b3954;
      color: white;
    }
  }
`;
