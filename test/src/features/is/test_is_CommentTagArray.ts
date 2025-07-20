import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_is_CommentTagArray = (): void =>
  _test_is("CommentTagArray")<CommentTagArray>(CommentTagArray)((input) =>
    typia.is<CommentTagArray>(input),
  );
