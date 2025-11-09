import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsParametersAsync_CommentTagLength =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "CommentTagLength",
    )(CommentTagLength)(
      (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
        typia.functional.assertEqualsParameters(p),
    );
