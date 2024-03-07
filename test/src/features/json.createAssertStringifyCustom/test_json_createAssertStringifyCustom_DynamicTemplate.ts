import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_DynamicTemplate =
  _test_json_assertStringify(CustomGuardError)(
    "DynamicTemplate",
  )<DynamicTemplate>(DynamicTemplate)(
    typia.json.createAssertStringify<DynamicTemplate>(
      (p) => new CustomGuardError(p),
    ),
  );
