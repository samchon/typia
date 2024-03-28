import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsParametersAsync_CommentTagFormat =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "CommentTagFormat",
  )(CommentTagFormat)(
    (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
      typia.functional.assertEqualsParameters(p),
  );
