import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsReturnCustom_CommentTagDefault =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagDefault")(
      CommentTagDefault,
    )((p: (input: CommentTagDefault) => CommentTagDefault) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
