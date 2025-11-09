import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createRandom_ObjectIntersection = (): void =>
  _test_random("ObjectIntersection")<ObjectIntersection>(ObjectIntersection)({
    random: typia.createRandom<ObjectIntersection>(
      (ObjectIntersection as any).RANDOM,
    ),
    assert: typia.createAssert<ObjectIntersection>(),
  });
