import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createRandom_CommentTagDefault = _test_random(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)({
  random: typia.createRandom<CommentTagDefault>(
    (CommentTagDefault as any).RANDOM,
  ),
  assert: typia.createAssert<CommentTagDefault>(),
});
