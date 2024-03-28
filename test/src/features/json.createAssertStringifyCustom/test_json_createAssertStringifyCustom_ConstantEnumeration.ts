import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_createAssertStringifyCustom_ConstantEnumeration =
  _test_json_assertStringify(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    typia.json.createAssertStringify<ConstantEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
