import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ArrayRepeatedRequired =
  _test_json_assertParse(TypeGuardError)(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
    typia.json.createAssertParse<ArrayRepeatedRequired>(),
  );
