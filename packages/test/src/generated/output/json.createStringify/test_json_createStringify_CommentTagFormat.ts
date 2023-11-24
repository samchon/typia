import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_createStringify_CommentTagFormat = _test_json_stringify(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input: CommentTagFormat): string => {
  const $string = (typia.json.createStringify as any).string;
  return `{"uuid":${$string((input as any).uuid)},"email":${$string(
    (input as any).email,
  )},"url":${$string((input as any).url)},"ipv4":${$string(
    (input as any).ipv4,
  )},"ipv6":${$string((input as any).ipv6)},"date":${$string(
    (input as any).date,
  )},"date_time":${$string((input as any).date_time)},"custom":${$string(
    (input as any).custom,
  )}}`;
});
