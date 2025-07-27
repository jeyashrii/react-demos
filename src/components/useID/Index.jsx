import UniqueId from "./UniqueId";
import React from "react";

const Index = () => {
  return (
    <>
      <UniqueId></UniqueId>
      <UniqueId></UniqueId>;
      {/* ----each uniqieId will have two different ids generated */}
    </>
  );
};

export default Index;
