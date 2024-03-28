import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_assertStringifyCustom_ArrayRepeatedUnion =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRepeatedUnion",
  )<ArrayRepeatedUnion>(ArrayRepeatedUnion)((input) =>
    typia.json.assertStringify<ArrayRepeatedUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
