import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_random_CommentTagType = _test_random(
  "CommentTagType",
)<CommentTagType>(CommentTagType)({
  random: () => typia.random<CommentTagType>((CommentTagType as any).RANDOM),
  assert: typia.createAssert<CommentTagType>(),
});
