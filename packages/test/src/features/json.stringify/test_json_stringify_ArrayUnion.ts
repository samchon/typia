import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_stringify_ArrayUnion = _test_json_stringify(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) => typia.json.stringify<ArrayUnion>(input));
