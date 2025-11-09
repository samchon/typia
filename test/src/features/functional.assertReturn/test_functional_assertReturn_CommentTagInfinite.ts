import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertReturn_CommentTagInfinite = (): void =>
  _test_functional_assertReturn(TypeGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
    typia.functional.assertReturn(p),
  );
