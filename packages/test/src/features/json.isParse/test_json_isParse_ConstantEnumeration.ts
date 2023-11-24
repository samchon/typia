import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_isParse_ConstantEnumeration = _test_json_isParse(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  typia.json.isParse<ConstantEnumeration>(input),
);
