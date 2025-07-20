import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createRandom_CommentTagBigInt = (): void =>
  _test_random("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)({
    random: typia.createRandom<CommentTagBigInt>(
      (CommentTagBigInt as any).RANDOM,
    ),
    assert: typia.createAssert<CommentTagBigInt>(),
  });
