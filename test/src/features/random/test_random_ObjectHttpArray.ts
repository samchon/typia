import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_random_ObjectHttpArray = (): void =>
  _test_random("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)({
    random: () =>
      typia.random<ObjectHttpArray>((ObjectHttpArray as any).RANDOM),
    assert: typia.createAssert<ObjectHttpArray>(),
  });
