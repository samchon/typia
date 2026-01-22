import { OpenApi } from "@samchon/openapi";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";

export const json_schema_jsDocTags = <Schema extends OpenApi.IJsonSchema>(
  schema: Schema,
  jsDocTags: IJsDocTagInfo[],
): Schema => {
  for (const tag of jsDocTags) {
    if (tag.name.startsWith("x-") === false) continue;

    const value: string | undefined = tag.text
      ?.filter((s) => s.kind === "text")
      .map((s) => s.text.split("\r\n").join("\n"))[0];
    if (value === undefined) continue;
    else (schema as any)[tag.name] = cast(value);

    console.log(tag);
  }
  return schema;
};

const cast = (value: string): string | number | boolean => {
  if (value === "true") return true;
  if (value === "false") return false;
  const num: number = Number(value);
  if (Number.isNaN(num) === false) return num;
  return value;
};
