import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ArrayUnion = _test_json_assertParse(
  TypeGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
  typia.json.createAssertParse<ArrayUnion>(),
);
