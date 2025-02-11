import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertEqualsParametersAsync_CommentTagPattern =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "CommentTagPattern",
  )(CommentTagPattern)(
    (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      typia.functional.assertEqualsParameters(p),
  );
