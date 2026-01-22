import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertReturnAsyncCustom_CommentTagObjectUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "CommentTagObjectUnion",
    )(CommentTagObjectUnion)(
      (p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
