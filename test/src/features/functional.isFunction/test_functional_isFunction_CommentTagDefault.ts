import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_isFunction_CommentTagDefault =
  _test_functional_isFunction("CommentTagDefault")(CommentTagDefault)(
    (p: (input: CommentTagDefault) => CommentTagDefault) =>
      typia.functional.isFunction(p),
  );
