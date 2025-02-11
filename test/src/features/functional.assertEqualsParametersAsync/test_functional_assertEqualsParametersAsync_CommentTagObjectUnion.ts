import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_assertEqualsParametersAsync_CommentTagObjectUnion =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "CommentTagObjectUnion",
  )(CommentTagObjectUnion)(
    (p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
      typia.functional.assertEqualsParameters(p),
  );
