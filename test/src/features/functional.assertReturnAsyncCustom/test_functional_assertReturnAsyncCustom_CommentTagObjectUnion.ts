import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_CommentTagObjectUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )((p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
