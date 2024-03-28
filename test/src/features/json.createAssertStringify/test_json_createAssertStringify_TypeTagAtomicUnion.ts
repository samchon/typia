import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_createAssertStringify_TypeTagAtomicUnion =
  _test_json_assertStringify(TypeGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.json.createAssertStringify<TypeTagAtomicUnion>(),
  );
