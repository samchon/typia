import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertReturnAsync_CommentTagObjectUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("CommentTagObjectUnion")(
      CommentTagObjectUnion,
    )((p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
      typia.functional.assertReturn(p),
    );
