import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createIs_CommentTagRange = (): void =>
  _test_is("CommentTagRange")<CommentTagRange>(CommentTagRange)(
    typia.createIs<CommentTagRange>(),
  );
