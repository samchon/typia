import { Metadata } from "../../schemas/metadata/Metadata";

import { PatternUtil } from "../../utils/PatternUtil";

import { metadata_to_pattern } from "./metadata_to_pattern";

/** @internal */
export const template_to_pattern = (props: {
  top: boolean;
  template: Metadata[];
}) => {
  const pattern: string = props.template
    .map((meta) =>
      metadata_to_pattern({
        top: false,
        metadata: meta,
      }),
    )
    .join("");
  return props.top ? PatternUtil.fix(pattern) : pattern;
};
