import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertEqualsReturnCustom_CommentTagInfinite =
  _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
