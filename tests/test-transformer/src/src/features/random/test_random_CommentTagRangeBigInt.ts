import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_random_CommentTagRangeBigInt = (): void => _test_random("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt
)({
  random: () => typia.random<CommentTagRangeBigInt>((CommentTagRangeBigInt as any).RANDOM),
  assert: typia.createAssert<CommentTagRangeBigInt>(),
});
