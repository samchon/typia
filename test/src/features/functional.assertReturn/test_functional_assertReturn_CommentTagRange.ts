import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertReturn_CommentTagRange =
  _test_functional_assertReturn(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertReturn(p),
  );
