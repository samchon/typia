import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsReturnCustom_CommentTagRange =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagRange")(
      CommentTagRange,
    )((p: (input: CommentTagRange) => CommentTagRange) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
