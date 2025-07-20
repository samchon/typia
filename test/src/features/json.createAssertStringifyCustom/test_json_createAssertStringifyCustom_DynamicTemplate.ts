import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createAssertStringifyCustom_DynamicTemplate = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "DynamicTemplate",
  )<DynamicTemplate>(DynamicTemplate)(
    typia.json.createAssertStringify<DynamicTemplate>(
      (p) => new CustomGuardError(p),
    ),
  );
