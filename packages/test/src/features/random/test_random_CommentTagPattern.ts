import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_random_CommentTagPattern = _test_random(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
  random: () =>
    typia.random<CommentTagPattern>((CommentTagPattern as any).RANDOM),
  assert: typia.createAssert<CommentTagPattern>(),
});
