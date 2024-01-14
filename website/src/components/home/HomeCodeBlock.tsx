import React from "react";

const HomeCodeBlock = (props: {
  namespace?: string;
  method: string;
  color?: string;
}) => (
  <React.Fragment>
    <span style={{ color: "skyblue" }}>typia</span>
    {"."}
    {props.namespace ? (
      <React.Fragment>
        <span style={{ color: "skyblue" }}>{props.namespace}</span>
        <span style={{ color: "gray" }}>{"."}</span>
      </React.Fragment>
    ) : null}
    <span style={{ color: props?.color ?? "yellow" }}>{props.method}</span>
    <span style={{ color: "rgb(0, 150, 255)" }}>{"<"}</span>
    <span style={{ color: "cyan" }}>T</span>
    <span style={{ color: "rgb(0, 150, 255)" }}>{">("}</span>
    <span style={{ color: "gray" }}>{"input"}</span>
    <span style={{ color: "rgb(0, 150, 255)" }}>{")"}</span>
    <span style={{ color: "gray" }}>{";"}</span>
  </React.Fragment>
);
export default HomeCodeBlock;
