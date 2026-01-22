import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_random_ObjectHttpNullable = (): void =>
  _test_random("ObjectHttpNullable")<ObjectHttpNullable>(ObjectHttpNullable)({
    random: () =>
      typia.random<ObjectHttpNullable>((ObjectHttpNullable as any).RANDOM),
    assert: typia.createAssert<ObjectHttpNullable>(),
  });
