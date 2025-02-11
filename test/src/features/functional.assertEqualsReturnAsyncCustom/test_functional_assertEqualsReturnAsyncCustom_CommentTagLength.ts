import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagLength =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "CommentTagLength",
  )(CommentTagLength)(
    (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
