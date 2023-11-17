import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_createStringify_ToJsonNull = _test_json_stringify(
  "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input: ToJsonNull): string => {
  return "null";
});
