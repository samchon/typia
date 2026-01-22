import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createRandom_ObjectNullable = (): void =>
  _test_random("ObjectNullable")<ObjectNullable>(ObjectNullable)({
    random: typia.createRandom<ObjectNullable>((ObjectNullable as any).RANDOM),
    assert: typia.createAssert<ObjectNullable>(),
  });
