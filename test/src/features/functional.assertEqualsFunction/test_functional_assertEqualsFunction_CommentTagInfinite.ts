import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertEqualsFunction_CommentTagInfinite =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)("CommentTagInfinite")(
      CommentTagInfinite,
    )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.assertEqualsFunction(p),
    );
