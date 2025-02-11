import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createAssertGuardEquals_TypeTagAtomicUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.createAssertGuardEquals<TypeTagAtomicUnion>(),
  );
