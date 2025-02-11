import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsParametersAsync_CommentTagType =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "CommentTagType",
  )(CommentTagType)((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertEqualsParameters(p),
  );
