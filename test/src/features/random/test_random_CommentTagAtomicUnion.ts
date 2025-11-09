import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_random_CommentTagAtomicUnion = (): void => _test_random("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)({
  random: () => typia.random<CommentTagAtomicUnion>((CommentTagAtomicUnion as any).RANDOM),
  assert: typia.createAssert<CommentTagAtomicUnion>(),
});
