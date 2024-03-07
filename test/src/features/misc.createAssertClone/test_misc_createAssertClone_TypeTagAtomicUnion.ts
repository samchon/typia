import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_TypeTagAtomicUnion =
  _test_misc_assertClone(TypeGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.misc.createAssertClone<TypeTagAtomicUnion>(),
  );
