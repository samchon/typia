import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsReturnCustom_CommentTagType =
  _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
