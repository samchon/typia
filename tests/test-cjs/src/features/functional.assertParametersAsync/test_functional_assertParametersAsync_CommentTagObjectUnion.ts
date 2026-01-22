import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertParametersAsync_CommentTagObjectUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "CommentTagObjectUnion",
    )(CommentTagObjectUnion)(
      (p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
        typia.functional.assertParameters(p),
    );
