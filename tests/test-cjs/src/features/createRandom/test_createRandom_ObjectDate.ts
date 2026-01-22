import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_createRandom_ObjectDate = (): void =>
  _test_random("ObjectDate")<ObjectDate>(ObjectDate)({
    random: typia.createRandom<ObjectDate>((ObjectDate as any).RANDOM),
    assert: typia.createAssert<ObjectDate>(),
  });
