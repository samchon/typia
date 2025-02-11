import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateEqualsFunction_CommentTagPattern =
  _test_functional_validateEqualsFunction("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.validateEqualsFunction(p),
  );
