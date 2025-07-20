import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_is_CommentTagType = (): void =>
  _test_is("CommentTagType")<CommentTagType>(CommentTagType)((input) =>
    typia.is<CommentTagType>(input),
  );
