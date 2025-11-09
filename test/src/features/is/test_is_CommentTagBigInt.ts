import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_is_CommentTagBigInt = (): void =>
  _test_is("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)((input) =>
    typia.is<CommentTagBigInt>(input),
  );
