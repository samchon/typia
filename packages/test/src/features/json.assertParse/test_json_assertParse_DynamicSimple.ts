import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_assertParse_DynamicSimple = _test_json_assertParse(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input) =>
  typia.json.assertParse<DynamicSimple>(input),
);
