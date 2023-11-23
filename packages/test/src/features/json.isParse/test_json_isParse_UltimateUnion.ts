import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_isParse_UltimateUnion = _test_json_isParse(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input) =>
  typia.json.isParse<UltimateUnion>(input),
);
