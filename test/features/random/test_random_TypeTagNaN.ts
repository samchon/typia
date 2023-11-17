import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_random_TypeTagNaN = _test_random("TypeTagNaN")<TypeTagNaN>(
  TypeTagNaN,
)({
  random: () => typia.random<TypeTagNaN>((TypeTagNaN as any).RANDOM),
  assert: typia.createAssert<TypeTagNaN>(),
});
