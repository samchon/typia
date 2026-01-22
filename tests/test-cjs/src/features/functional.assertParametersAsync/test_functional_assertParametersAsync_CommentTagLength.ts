import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertParametersAsync_CommentTagLength =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("CommentTagLength")(
      CommentTagLength,
    )((p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.assertParameters(p),
    );
