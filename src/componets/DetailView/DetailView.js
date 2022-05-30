import React from 'react'
import { useLocation } from "react-router";

export const DetailView = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div> {state}</div>
  )
}
