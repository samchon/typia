import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createRandom_TypeTagTuple = (): void =>
  _test_random("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)({
    random: typia.createRandom<TypeTagTuple>((TypeTagTuple as any).RANDOM),
    assert: typia.createAssert<TypeTagTuple>(),
  });
