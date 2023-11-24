import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createAssertEquals_TypeTagAtomicUnion = _test_assertEquals(
  "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
  typia.createAssertEquals<TypeTagAtomicUnion>(),
);
