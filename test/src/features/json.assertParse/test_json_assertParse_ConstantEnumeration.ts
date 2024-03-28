import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_assertParse_ConstantEnumeration = _test_json_assertParse(
  TypeGuardError,
)("ConstantEnumeration")<ConstantEnumeration>(ConstantEnumeration)((input) =>
  typia.json.assertParse<ConstantEnumeration>(input),
);
