import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_is_CommentTagPattern = (): void =>
  _test_is("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)((input) =>
    typia.is<CommentTagPattern>(input),
  );
