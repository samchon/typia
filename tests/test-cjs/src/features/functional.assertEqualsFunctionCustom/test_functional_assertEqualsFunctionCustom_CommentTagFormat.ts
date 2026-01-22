import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsFunctionCustom_CommentTagFormat =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("CommentTagFormat")(
      CommentTagFormat,
    )((p: (input: CommentTagFormat) => CommentTagFormat) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
