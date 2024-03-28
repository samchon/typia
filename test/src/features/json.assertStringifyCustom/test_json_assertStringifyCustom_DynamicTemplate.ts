import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_assertStringifyCustom_DynamicTemplate =
  _test_json_assertStringify(CustomGuardError)(
    "DynamicTemplate",
  )<DynamicTemplate>(DynamicTemplate)((input) =>
    typia.json.assertStringify<DynamicTemplate>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
