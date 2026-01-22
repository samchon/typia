import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_random_ObjectUndefined = (): void =>
  _test_random("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)({
    random: () =>
      typia.random<ObjectUndefined>((ObjectUndefined as any).RANDOM),
    assert: typia.createAssert<ObjectUndefined>(),
  });
