import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createAssertClone_CommentTagArray =
  _test_misc_assertClone("CommentTagArray")<CommentTagArray>(CommentTagArray)(
    typia.misc.createAssertClone<CommentTagArray>(),
  );
