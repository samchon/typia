import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateEqualsReturn_CommentTagType = (): void =>
  _test_functional_validateEqualsReturn("CommentTagType")(CommentTagType)(
    (p: (input: CommentTagType) => CommentTagType) =>
      typia.functional.validateEqualsReturn(p),
  );
