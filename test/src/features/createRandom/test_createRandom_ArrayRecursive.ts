import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createRandom_ArrayRecursive = (): void =>
  _test_random("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)({
    random: typia.createRandom<ArrayRecursive>((ArrayRecursive as any).RANDOM),
    assert: typia.createAssert<ArrayRecursive>(),
  });
