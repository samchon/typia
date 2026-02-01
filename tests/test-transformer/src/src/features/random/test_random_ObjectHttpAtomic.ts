import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_random_ObjectHttpAtomic = (): void => _test_random("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic
)({
  random: () => typia.random<ObjectHttpAtomic>((ObjectHttpAtomic as any).RANDOM),
  assert: typia.createAssert<ObjectHttpAtomic>(),
});
