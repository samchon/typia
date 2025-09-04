import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_isFunction_CommentTagLength = (): void =>
  _test_functional_isFunction("CommentTagLength")(CommentTagLength)(
    (p: (input: CommentTagLength) => CommentTagLength) =>
      typia.functional.isFunction(p),
  );
