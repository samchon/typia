import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_random_TypeTagArrayUnion = _test_random(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)({
  random: () =>
    typia.random<TypeTagArrayUnion>((TypeTagArrayUnion as any).RANDOM),
  assert: typia.createAssert<TypeTagArrayUnion>(),
});
