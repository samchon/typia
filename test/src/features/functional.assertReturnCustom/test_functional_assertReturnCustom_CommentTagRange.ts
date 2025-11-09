import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertReturnCustom_CommentTagRange = (): void =>
  _test_functional_assertReturn(CustomGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
