import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createRandom_CommentTagLength = (): void =>
  _test_random("CommentTagLength")<CommentTagLength>(CommentTagLength)({
    random: typia.createRandom<CommentTagLength>(
      (CommentTagLength as any).RANDOM,
    ),
    assert: typia.createAssert<CommentTagLength>(),
  });
