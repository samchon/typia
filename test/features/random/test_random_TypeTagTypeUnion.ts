import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_random_TypeTagTypeUnion = _test_random(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
  random: () =>
    typia.random<TypeTagTypeUnion>((TypeTagTypeUnion as any).RANDOM),
  assert: typia.createAssert<TypeTagTypeUnion>(),
});
