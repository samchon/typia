import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertParametersCustom_CommentTagInfinite =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("CommentTagInfinite")(
      CommentTagInfinite,
    )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
