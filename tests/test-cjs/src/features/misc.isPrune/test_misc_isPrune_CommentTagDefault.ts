import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_isPrune_CommentTagDefault = (): void =>
  _test_misc_isPrune("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)(
    (input) => typia.misc.isPrune<CommentTagDefault>(input),
  );
