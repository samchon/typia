import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_random_ObjectPartial = (): void => _test_random("ObjectPartial")<ObjectPartial>(
    ObjectPartial
)({
  random: () => typia.random<ObjectPartial>((ObjectPartial as any).RANDOM),
  assert: typia.createAssert<ObjectPartial>(),
});
