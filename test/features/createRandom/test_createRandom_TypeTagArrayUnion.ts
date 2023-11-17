import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createRandom_TypeTagArrayUnion = _test_random(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)({
  random: typia.createRandom<TypeTagArrayUnion>(
    (TypeTagArrayUnion as any).RANDOM,
  ),
  assert: typia.createAssert<TypeTagArrayUnion>(),
});
