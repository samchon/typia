import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createRandom_ObjectTuple = (): void =>
  _test_random("ObjectTuple")<ObjectTuple>(ObjectTuple)({
    random: typia.createRandom<ObjectTuple>((ObjectTuple as any).RANDOM),
    assert: typia.createAssert<ObjectTuple>(),
  });
