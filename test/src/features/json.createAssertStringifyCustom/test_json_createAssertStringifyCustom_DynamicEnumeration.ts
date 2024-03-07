import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_DynamicEnumeration =
  _test_json_assertStringify(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)(
    typia.json.createAssertStringify<DynamicEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
