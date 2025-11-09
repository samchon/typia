import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createClone_CommentTagDefault = (): void =>
  _test_misc_clone("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)(
    typia.misc.createClone<CommentTagDefault>(),
  );
