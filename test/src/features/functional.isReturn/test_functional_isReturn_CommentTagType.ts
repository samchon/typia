import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_isReturn_CommentTagType = (): void =>
  _test_functional_isReturn("CommentTagType")(CommentTagType)(
    (p: (input: CommentTagType) => CommentTagType) =>
      typia.functional.isReturn(p),
  );
