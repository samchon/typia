import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_CommentTagInfinite =
  _test_functional_assertParameters(TypeGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
    typia.functional.assertParameters(p),
  );
