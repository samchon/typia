import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_isFunction_CommentTagRange = (): void =>
  _test_functional_isFunction("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => CommentTagRange) =>
      typia.functional.isFunction(p),
  );
