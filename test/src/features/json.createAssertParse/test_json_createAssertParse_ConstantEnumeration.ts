import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ConstantEnumeration =
  _test_json_assertParse(TypeGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    typia.json.createAssertParse<ConstantEnumeration>(),
  );
