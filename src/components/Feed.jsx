/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const selc = useSelector((store) => store.feed);

  const fetchUser = async () => {
    const users = await axios.get("http://localhost:3000/user/feed", {
      withCredentials: true,
    });
    console.log(users?.data);
    dispatch(addFeed(users?.data?.data)); // Assuming users.data.data is the array of users
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return selc.length > 0 ? (
    <div className="flex justify-center my-14 gap-3">
      {/* Map through the users and render a Card for each */}
     
        <Card
          key={selc[0]._id} // Assuming users have an id or unique identifier
          id={selc[0]._id} // Assuming users have an id or unique identifier
          firstName={selc[0]?.firstName}
          lastName={selc[0]?.lastName}
          age={selc[0]?.age}
          gender={selc[0]?.gender}
        />
      
    </div>
  ) : (
    <div>
      <h1 className="text-center text-3xl font-semibold my-8">
        No users to show.
      </h1>
    </div>
  );
};

export default Feed;
