import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_createStringify_ArraySimple = _test_json_stringify(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.json.createStringify<ArraySimple>());
