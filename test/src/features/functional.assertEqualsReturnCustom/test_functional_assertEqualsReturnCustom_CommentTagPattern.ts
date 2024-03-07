import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_CommentTagPattern =
  _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
