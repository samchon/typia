import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_createAssertStringifyCustom_ArrayRepeatedUnion =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRepeatedUnion",
  )<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
    typia.json.createAssertStringify<ArrayRepeatedUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
