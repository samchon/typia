import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_createAssertStringify_ArrayRepeatedUnion = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ArrayRepeatedUnion",
  )<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
    typia.json.createAssertStringify<ArrayRepeatedUnion>(),
  );
