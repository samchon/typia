import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_random_CommentTagInfinite = (): void => _test_random("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite
)({
  random: () => typia.random<CommentTagInfinite>((CommentTagInfinite as any).RANDOM),
  assert: typia.createAssert<CommentTagInfinite>(),
});
