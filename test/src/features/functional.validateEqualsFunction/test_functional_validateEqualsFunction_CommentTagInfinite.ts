import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateEqualsFunction_CommentTagInfinite =
  _test_functional_validateEqualsFunction("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
    typia.functional.validateEqualsFunction(p),
  );
