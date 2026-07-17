import React from "react";

// This snippet renders inline on the light section background, so the colors
// are a light-background code palette rather than the dark-panel one used by
// HomeCodeHighlight. Each clears 4.5:1 on white.
const IDENTIFIER = "#184e95";
const GENERIC = "#1e8449";
const METHOD = "#8a5a00";
const INPUT = "#4c5e76";

const HomeCodeBlock = (props: HomeCodeBlock.IProps) => (
  <React.Fragment>
    <span style={{ color: IDENTIFIER }}>typia</span>
    <span style={{ color: props.inputColor ?? INPUT }}>{"."}</span>
    {props.namespace ? (
      <React.Fragment>
        <span style={{ color: IDENTIFIER }}>{props.namespace}</span>
        <span style={{ color: props.inputColor ?? INPUT }}>{"."}</span>
      </React.Fragment>
    ) : null}
    <span style={{ color: props?.color ?? METHOD }}>{props.method}</span>
    <span style={{ color: IDENTIFIER }}>{"<"}</span>
    <span style={{ color: GENERIC }}>{props.template ?? "T"}</span>
    <span style={{ color: IDENTIFIER }}>{">("}</span>
    {props.argument ? (
      <span style={{ color: props.inputColor ?? INPUT }}>{"input"}</span>
    ) : null}
    <span style={{ color: IDENTIFIER }}>{")"}</span>
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
