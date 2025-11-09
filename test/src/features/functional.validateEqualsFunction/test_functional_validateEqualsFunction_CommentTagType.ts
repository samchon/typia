import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateEqualsFunction_CommentTagType = (): void =>
  _test_functional_validateEqualsFunction("CommentTagType")(CommentTagType)(
    (p: (input: CommentTagType) => CommentTagType) =>
      typia.functional.validateEqualsFunction(p),
  );
