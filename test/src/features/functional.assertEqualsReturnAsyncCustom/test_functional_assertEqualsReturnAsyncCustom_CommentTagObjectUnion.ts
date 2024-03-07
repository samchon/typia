import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagObjectUnion =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "CommentTagObjectUnion",
  )(CommentTagObjectUnion)(
    (p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
