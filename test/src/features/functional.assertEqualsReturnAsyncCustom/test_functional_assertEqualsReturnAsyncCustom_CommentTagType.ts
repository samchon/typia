import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagType =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
