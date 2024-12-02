import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";

export const json_schema_description = (props: {
  description?: string | null | undefined;
  jsDocTags?: IJsDocTagInfo[];
}): string | undefined =>
  props.jsDocTags
    ?.find((tag) => tag.name === "description")
    ?.text?.[0]?.text?.split("\r\n")
    .join("\n") ??
  props.description ??
  undefined;
