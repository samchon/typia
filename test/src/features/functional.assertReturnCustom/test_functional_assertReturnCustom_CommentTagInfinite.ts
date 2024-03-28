import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertReturnCustom_CommentTagInfinite =
  _test_functional_assertReturn(CustomGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
