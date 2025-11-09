import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertParametersAsync_CommentTagFormat =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("CommentTagFormat")(
      CommentTagFormat,
    )((p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
      typia.functional.assertParameters(p),
    );
