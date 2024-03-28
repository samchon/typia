import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertReturnAsync_CommentTagFormat =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.assertReturn(p),
  );
