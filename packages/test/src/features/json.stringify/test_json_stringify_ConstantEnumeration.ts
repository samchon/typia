import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_stringify_ConstantEnumeration = _test_json_stringify(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  typia.json.stringify<ConstantEnumeration>(input),
);
