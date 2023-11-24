import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createRandom_CommentTagInfinite = _test_random(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
  random: typia.createRandom<CommentTagInfinite>(
    (CommentTagInfinite as any).RANDOM,
  ),
  assert: typia.createAssert<CommentTagInfinite>(),
});
