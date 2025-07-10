import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";

export const json_schema_title = (schema: {
  description?: string | null | undefined;
  jsDocTags?: IJsDocTagInfo[] | undefined;
}): string | undefined => {
  const info: IJsDocTagInfo | undefined = schema.jsDocTags?.find(
    (tag) => tag.name === "title",
  );
  return !!info?.text?.length ? CommentFactory.merge(info.text) : undefined;
};
