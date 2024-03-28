import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsReturnCustom_CommentTagLength =
  _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => CommentTagLength) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
