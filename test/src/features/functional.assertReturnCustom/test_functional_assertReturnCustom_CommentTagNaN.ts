import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertReturnCustom_CommentTagNaN =
  _test_functional_assertReturn(CustomGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
