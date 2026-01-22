import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertParametersAsync_CommentTagType =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("CommentTagType")(
      CommentTagType,
    )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
      typia.functional.assertParameters(p),
    );
