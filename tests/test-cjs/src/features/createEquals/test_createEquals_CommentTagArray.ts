import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createEquals_CommentTagArray = (): void =>
  _test_equals("CommentTagArray")<CommentTagArray>(CommentTagArray)(
    typia.createEquals<CommentTagArray>(),
  );
