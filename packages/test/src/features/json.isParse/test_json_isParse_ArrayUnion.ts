import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_isParse_ArrayUnion = _test_json_isParse(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) => typia.json.isParse<ArrayUnion>(input));
