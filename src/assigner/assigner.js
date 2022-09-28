import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssignment } from "./assignerActions";

export const Assign = () => {
  const dispatch = useDispatch();
  const assignment = useSelector((state) => state.assignment.assignment);

  console.log("assignment value set:"+assignment);

  useEffect(() => {
    if (assignment === -1) {
      dispatch(getAssignment());
    }
  });
  return <div />;
};