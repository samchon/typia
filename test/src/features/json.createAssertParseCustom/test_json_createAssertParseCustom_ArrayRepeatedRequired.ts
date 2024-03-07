import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ArrayRepeatedRequired =
  _test_json_assertParse(CustomGuardError)(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
    typia.json.createAssertParse<ArrayRepeatedRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
