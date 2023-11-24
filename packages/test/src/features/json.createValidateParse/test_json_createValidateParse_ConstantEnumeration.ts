import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_createValidateParse_ConstantEnumeration =
  _test_json_validateParse("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )(typia.json.createValidateParse<ConstantEnumeration>());
