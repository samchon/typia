import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_assertParse_UltimateUnion = _test_json_assertParse(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input) =>
  typia.json.assertParse<UltimateUnion>(input),
);
