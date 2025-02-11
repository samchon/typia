import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertEqualsReturnCustom_CommentTagPattern =
  _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
