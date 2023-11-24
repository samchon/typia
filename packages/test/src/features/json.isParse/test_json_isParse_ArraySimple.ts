import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_isParse_ArraySimple = _test_json_isParse(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) => typia.json.isParse<ArraySimple>(input));
