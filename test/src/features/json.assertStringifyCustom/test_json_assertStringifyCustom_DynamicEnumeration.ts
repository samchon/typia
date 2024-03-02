import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_assertStringifyCustom_DynamicEnumeration =
  _test_json_assertStringify(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.json.assertStringify<DynamicEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
