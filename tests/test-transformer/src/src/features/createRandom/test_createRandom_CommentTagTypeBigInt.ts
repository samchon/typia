import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createRandom_CommentTagTypeBigInt = (): void => _test_random("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)({
  random: typia.createRandom<CommentTagTypeBigInt>((CommentTagTypeBigInt as any).RANDOM),
  assert: typia.createAssert<CommentTagTypeBigInt>(),
});
