import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsParametersCustom_CommentTagLength =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "CommentTagLength",
    )(CommentTagLength)((p: (input: CommentTagLength) => CommentTagLength) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
