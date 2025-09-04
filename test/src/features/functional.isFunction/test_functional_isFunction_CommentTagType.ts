import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_isFunction_CommentTagType = (): void =>
  _test_functional_isFunction("CommentTagType")(CommentTagType)(
    (p: (input: CommentTagType) => CommentTagType) =>
      typia.functional.isFunction(p),
  );
