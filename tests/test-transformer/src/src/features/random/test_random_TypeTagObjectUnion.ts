import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_random_TypeTagObjectUnion = (): void => _test_random("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion
)({
  random: () => typia.random<TypeTagObjectUnion>((TypeTagObjectUnion as any).RANDOM),
  assert: typia.createAssert<TypeTagObjectUnion>(),
});
