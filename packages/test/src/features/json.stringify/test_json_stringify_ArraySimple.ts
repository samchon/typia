import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_stringify_ArraySimple = _test_json_stringify(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
  typia.json.stringify<ArraySimple>(input),
);
