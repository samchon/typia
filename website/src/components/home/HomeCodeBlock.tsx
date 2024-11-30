import React from "react";

const BRIGHT_BLUE = "rgb(0, 200, 255)";
const CYAN = "rgb(80, 200, 0)";

const HomeCodeBlock = (props: HomeCodeBlock.IProps) => (
  <React.Fragment>
    <span style={{ color: BRIGHT_BLUE }}>typia</span>
    <span style={{ color: props.inputColor ?? "gray" }}>{"."}</span>
    {props.namespace ? (
      <React.Fragment>
        <span style={{ color: BRIGHT_BLUE }}>{props.namespace}</span>
        <span style={{ color: props.inputColor ?? "gray" }}>{"."}</span>
      </React.Fragment>
    ) : null}
    <span style={{ color: props?.color ?? "yellow" }}>{props.method}</span>
    <span style={{ color: BRIGHT_BLUE }}>{"<"}</span>
    <span style={{ color: CYAN }}>{props.template ?? "T"}</span>
    <span style={{ color: BRIGHT_BLUE }}>{">("}</span>
    {props.argument ? (
      <span style={{ color: props.inputColor ?? "gray" }}>{"input"}</span>
    ) : null}
    <span style={{ color: BRIGHT_BLUE }}>{")"}</span>
  </React.Fragment>
);
namespace HomeCodeBlock {
  export interface IProps {
    method: string;
    argument: boolean;
    namespace?: string;
    color?: string;
    inputColor?: string;
    template?: string;
  }
}
export default HomeCodeBlock;
