import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_random_TypeTagAtomicUnion = (): void => _test_random("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)({
  random: () => typia.random<TypeTagAtomicUnion>((TypeTagAtomicUnion as any).RANDOM),
  assert: typia.createAssert<TypeTagAtomicUnion>(),
});
