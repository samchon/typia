import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_createIsParse_ConstantEnumeration = _test_json_isParse(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)(
  typia.json.createIsParse<ConstantEnumeration>(),
);
