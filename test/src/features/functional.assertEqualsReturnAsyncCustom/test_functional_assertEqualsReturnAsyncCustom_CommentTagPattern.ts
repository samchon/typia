import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagPattern =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "CommentTagPattern",
  )(CommentTagPattern)(
    (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
