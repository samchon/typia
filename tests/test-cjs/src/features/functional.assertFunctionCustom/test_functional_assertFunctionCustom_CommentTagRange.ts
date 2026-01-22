import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertFunctionCustom_CommentTagRange = (): void =>
  _test_functional_assertFunction(CustomGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
