import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createRandom_CommentTagFormat = _test_random(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
  random: typia.createRandom<CommentTagFormat>(
    (CommentTagFormat as any).RANDOM,
  ),
  assert: typia.createAssert<CommentTagFormat>(),
});
