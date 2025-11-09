import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_validateClone_CommentTagRange = (): void =>
  _test_misc_validateClone("CommentTagRange")<CommentTagRange>(CommentTagRange)(
    (input) => typia.misc.validateClone<CommentTagRange>(input),
  );
