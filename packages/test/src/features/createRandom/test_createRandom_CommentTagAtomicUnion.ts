import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createRandom_CommentTagAtomicUnion = _test_random(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
  random: typia.createRandom<CommentTagAtomicUnion>(
    (CommentTagAtomicUnion as any).RANDOM,
  ),
  assert: typia.createAssert<CommentTagAtomicUnion>(),
});
