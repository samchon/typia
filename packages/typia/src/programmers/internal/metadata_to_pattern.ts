import { Metadata } from "../../schemas/metadata/Metadata";

import { PatternUtil } from "../../utils/PatternUtil";

import { template_to_pattern } from "./template_to_pattern";

/** @internal */
export const metadata_to_pattern = (props: {
  top: boolean;
  metadata: Metadata;
}): string => {
  if (props.metadata.atomics.find((a) => a.type === "string") !== undefined)
    return "(.*)";

  const values: string[] = props.metadata.constants
    .map((c) => {
      if (c.type !== "string") return c.values.map((v) => v.toString());
      return (c.values.map((v) => v.value) as string[]).map((str) =>
        PatternUtil.escape(str),
      );
    })
    .flat();
  for (const a of props.metadata.atomics)
    if (a.type === "number" || a.type === "bigint")
      values.push(PatternUtil.NUMBER);
    else if (a.type === "boolean") values.push(PatternUtil.BOOLEAN);
  for (const { row } of props.metadata.templates)
    values.push(
      "(" +
        template_to_pattern({
          top: false,
          template: row,
        }) +
        ")",
    );

  const pattern: string =
    values.length === 1 ? values[0]! : "(" + values.join("|") + ")";
  return props.top ? PatternUtil.fix(pattern) : pattern;
};
