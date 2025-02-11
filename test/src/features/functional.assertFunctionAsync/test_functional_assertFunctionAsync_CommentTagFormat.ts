import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertFunctionAsync_CommentTagFormat =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.assertFunction(p),
  );
