import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createRandom_ObjectHttpCommentTag = (): void => _test_random("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)({
  random: typia.createRandom<ObjectHttpCommentTag>((ObjectHttpCommentTag as any).RANDOM),
  assert: typia.createAssert<ObjectHttpCommentTag>(),
});
