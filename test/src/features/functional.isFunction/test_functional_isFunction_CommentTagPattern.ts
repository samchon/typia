import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_isFunction_CommentTagPattern =
  _test_functional_isFunction("CommentTagPattern")(CommentTagPattern)(
    (p: (input: CommentTagPattern) => CommentTagPattern) =>
      typia.functional.isFunction(p),
  );
