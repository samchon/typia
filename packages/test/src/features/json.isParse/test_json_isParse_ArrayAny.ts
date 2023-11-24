import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_isParse_ArrayAny = _test_json_isParse(
  "ArrayAny",
)<ArrayAny>(ArrayAny)((input) => typia.json.isParse<ArrayAny>(input));
