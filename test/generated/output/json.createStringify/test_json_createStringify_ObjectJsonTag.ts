import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_createStringify_ObjectJsonTag = _test_json_stringify(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input: ObjectJsonTag): string => {
  const $string = (typia.json.createStringify as any).string;
  return `{"vulnerable":${$string(
    (input as any).vulnerable,
  )},"description":${$string((input as any).description)},"title":${$string(
    (input as any).title,
  )},"complicate_title":${$string((input as any).complicate_title)}}`;
});
