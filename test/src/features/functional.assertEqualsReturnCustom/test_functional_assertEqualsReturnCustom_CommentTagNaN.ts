import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsReturnCustom_CommentTagNaN =
  _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
