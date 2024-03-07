import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ArrayRepeatedUnion =
  _test_json_assertParse(CustomGuardError)(
    "ArrayRepeatedUnion",
  )<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
    typia.json.createAssertParse<ArrayRepeatedUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
