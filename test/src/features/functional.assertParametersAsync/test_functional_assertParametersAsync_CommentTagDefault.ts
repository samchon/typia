import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertParametersAsync_CommentTagDefault =
  _test_functional_assertParametersAsync(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.assertParameters(p),
  );
