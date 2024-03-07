import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ConstantEnumeration =
  _test_json_assertParse(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    typia.json.createAssertParse<ConstantEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
