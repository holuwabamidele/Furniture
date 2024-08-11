import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { basedb } from "../Base";

const ShopDetail = () => {
  const { id } = useParams();
  const [getDescription, setGetDescription] = useState({});

  // console.log(id);

  const getDetail = async (id) => {
    const myData = await getDoc(doc(basedb, "furniture", id));
    setGetDescription({ ...myData.data(), id: myData.id });
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  console.log(getDescription);
  return (
    <div>
      <img src={getDescription.avatar} width="100%" height="400" alt="" />
      <h1>Title:{getDescription.title}</h1>
      <p>Description:{getDescription.description}</p>
    </div>
  );
};

export default ShopDetail;
