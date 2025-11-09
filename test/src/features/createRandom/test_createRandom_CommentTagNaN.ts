import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createRandom_CommentTagNaN = (): void =>
  _test_random("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
    random: typia.createRandom<CommentTagNaN>((CommentTagNaN as any).RANDOM),
    assert: typia.createAssert<CommentTagNaN>(),
  });
