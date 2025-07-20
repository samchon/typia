import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_clone_CommentTagType = (): void =>
  _test_misc_clone("CommentTagType")<CommentTagType>(CommentTagType)((input) =>
    typia.misc.clone<CommentTagType>(input),
  );
