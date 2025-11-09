import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsReturnCustom_CommentTagFormat =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagFormat")(
      CommentTagFormat,
    )((p: (input: CommentTagFormat) => CommentTagFormat) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
