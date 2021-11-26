import React from "react";
import { useParams } from "react-router";

interface ParamTypes {
  id: string;
}

const MembershipDetail = (props: any) => {
  const { id } = useParams<ParamTypes>();
  return <div>Membership id is {id}</div>;
};

export default MembershipDetail;
