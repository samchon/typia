import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createRandom_CommentTagArray = (): void => _test_random("CommentTagArray")<CommentTagArray>(
    CommentTagArray
)({
  random: typia.createRandom<CommentTagArray>((CommentTagArray as any).RANDOM),
  assert: typia.createAssert<CommentTagArray>(),
});
