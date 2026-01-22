import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertEqualsFunctionCustom_CommentTagPattern =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "CommentTagPattern",
    )(CommentTagPattern)((p: (input: CommentTagPattern) => CommentTagPattern) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
