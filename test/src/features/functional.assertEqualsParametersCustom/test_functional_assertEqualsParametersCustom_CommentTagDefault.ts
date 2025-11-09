import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsParametersCustom_CommentTagDefault =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "CommentTagDefault",
    )(CommentTagDefault)((p: (input: CommentTagDefault) => CommentTagDefault) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
