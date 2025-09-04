import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertEqualsFunctionCustom_CommentTagInfinite =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "CommentTagInfinite",
    )(CommentTagInfinite)(
      (p: (input: CommentTagInfinite) => CommentTagInfinite) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
