import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsParametersAsync_CommentTagDefault =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "CommentTagDefault",
    )(CommentTagDefault)(
      (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
        typia.functional.assertEqualsParameters(p),
    );
