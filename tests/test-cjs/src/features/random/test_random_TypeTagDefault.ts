import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_random_TypeTagDefault = (): void =>
  _test_random("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)({
    random: () => typia.random<TypeTagDefault>((TypeTagDefault as any).RANDOM),
    assert: typia.createAssert<TypeTagDefault>(),
  });
