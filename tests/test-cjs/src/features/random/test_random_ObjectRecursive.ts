import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_random_ObjectRecursive = (): void =>
  _test_random("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)({
    random: () =>
      typia.random<ObjectRecursive>((ObjectRecursive as any).RANDOM),
    assert: typia.createAssert<ObjectRecursive>(),
  });
