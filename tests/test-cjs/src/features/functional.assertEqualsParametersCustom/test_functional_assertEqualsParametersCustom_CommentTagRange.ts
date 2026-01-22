import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsParametersCustom_CommentTagRange =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "CommentTagRange",
    )(CommentTagRange)((p: (input: CommentTagRange) => CommentTagRange) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
