import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagDefault =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "CommentTagDefault",
  )(CommentTagDefault)(
    (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
