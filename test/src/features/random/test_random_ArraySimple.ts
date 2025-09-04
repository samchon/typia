import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_random_ArraySimple = (): void =>
  _test_random("ArraySimple")<ArraySimple>(ArraySimple)({
    random: () => typia.random<ArraySimple>((ArraySimple as any).RANDOM),
    assert: typia.createAssert<ArraySimple>(),
  });
