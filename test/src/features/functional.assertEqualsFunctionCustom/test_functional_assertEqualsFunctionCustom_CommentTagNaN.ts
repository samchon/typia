import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsFunctionCustom_CommentTagNaN =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("CommentTagNaN")(
      CommentTagNaN,
    )((p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
