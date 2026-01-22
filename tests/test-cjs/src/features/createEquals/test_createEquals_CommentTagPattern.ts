import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createEquals_CommentTagPattern = (): void =>
  _test_equals("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)(
    typia.createEquals<CommentTagPattern>(),
  );
