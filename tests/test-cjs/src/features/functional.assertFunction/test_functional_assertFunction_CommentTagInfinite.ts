import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertFunction_CommentTagInfinite = (): void =>
  _test_functional_assertFunction(TypeGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
    typia.functional.assertFunction(p),
  );
