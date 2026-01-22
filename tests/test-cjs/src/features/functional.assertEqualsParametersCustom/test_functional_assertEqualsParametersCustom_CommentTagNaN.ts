import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsParametersCustom_CommentTagNaN =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("CommentTagNaN")(
      CommentTagNaN,
    )((p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
