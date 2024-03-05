import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertEqualsParametersCustom_CommentTagInfinite =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "CommentTagInfinite",
  )(CommentTagInfinite)(
    (p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
