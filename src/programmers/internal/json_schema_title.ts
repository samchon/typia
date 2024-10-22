import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";

export const json_schema_title = (schema: {
  description?: string | null | undefined;
  jsDocTags?: IJsDocTagInfo[] | undefined;
}): string | undefined => {
  const info: IJsDocTagInfo | undefined = schema.jsDocTags?.find(
    (tag) => tag.name === "title",
  );
  if (info?.text?.length) return CommentFactory.merge(info.text);
  else if (!schema.description?.length) return undefined;

  const index: number = schema.description.indexOf("\n");
  const top: string = (
    index === -1 ? schema.description : schema.description.substring(0, index)
  ).trim();
  return top.endsWith(".") ? top.substring(0, top.length - 1) : undefined;
};
