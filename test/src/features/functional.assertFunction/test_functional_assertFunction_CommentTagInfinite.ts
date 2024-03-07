import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_CommentTagInfinite =
  _test_functional_assertFunction(TypeGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
    typia.functional.assertFunction(p),
  );
