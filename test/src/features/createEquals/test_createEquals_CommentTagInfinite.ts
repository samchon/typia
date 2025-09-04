import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createEquals_CommentTagInfinite = (): void =>
  _test_equals("CommentTagInfinite")<CommentTagInfinite>(CommentTagInfinite)(
    typia.createEquals<CommentTagInfinite>(),
  );
