import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_random_ObjectHttpTypeTag = (): void => _test_random("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)({
  random: () => typia.random<ObjectHttpTypeTag>((ObjectHttpTypeTag as any).RANDOM),
  assert: typia.createAssert<ObjectHttpTypeTag>(),
});
