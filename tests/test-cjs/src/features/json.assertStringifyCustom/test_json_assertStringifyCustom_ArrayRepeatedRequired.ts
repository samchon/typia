import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_assertStringifyCustom_ArrayRepeatedRequired = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)((input) =>
    typia.json.assertStringify<ArrayRepeatedRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
