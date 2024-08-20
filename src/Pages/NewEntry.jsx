import { addDoc, collection } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  // uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import styled from "styled-components";
import { basedb, baseStorage } from "../Base";
import { useNavigate } from "react-router-dom";
import bg from "../assets/furniturelogo.svg";
import Swal from "sweetalert2";

const NewEntry = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  // const uploadImage = (e) => {
  //   const file = e.target.files[0];
  //   const fileRef = ref(baseStorage, "/myImage", +file.name);
  //   const storageRef = uploadBytesResumable(fileRef, file);
  //   getDownloadURL(storageRef.snapshot.ref).then((url) => {
  //     setAvatar(url);
  //   });
  // };

  const postData = async () => {
    // step 1: upload avatar to firebase storage
    const storageRef = ref(baseStorage, `avatars/${avatar.name}`);
    await uploadBytes(storageRef, avatar);

    // step 2: get the download url
    const avatarURL = await getDownloadURL(storageRef);

    addDoc(collection(basedb, "furniture"), {
      title,
      description,
      avatar: avatarURL,
    });
    Swal.fire({
      title: "Data Submitted!",
      icon: "success",
    });
    navigate("/shop");

    setTitle("");
    setDescription("");
  };

  return (
    <Container>
      <Wrapper onSubmit={postData}>
        <Link to="/new">
          <input
            type="file"
            required
            onChange={(e) => setAvatar(e.target.files[0])()}
          />
          <br />
          <br />
          <input
            required
            type="Title"
            placeholder="Item Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <textarea
            required
            placeholder="Enter Item Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button type="submit">SUBMIT</button>
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
  /* background-color: red; */
  background-image: url(${bg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const Wrapper = styled.form``;
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

  input {
    width: 300px;
    background-color: #eee;
    height: 40px;
    outline: none;
    border: none;
  }

  textarea {
    height: 150px;
    width: 300px;
    resize: vertical;
  }
`;
