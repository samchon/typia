import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createRandom_CommentTagType = (): void =>
  _test_random("CommentTagType")<CommentTagType>(CommentTagType)({
    random: typia.createRandom<CommentTagType>((CommentTagType as any).RANDOM),
    assert: typia.createAssert<CommentTagType>(),
  });
