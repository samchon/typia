import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_assertEquals_TypeTagAtomicUnion = (): void =>
  _test_assertEquals(TypeGuardError)("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )((input) => typia.assertEquals<TypeTagAtomicUnion>(input));
