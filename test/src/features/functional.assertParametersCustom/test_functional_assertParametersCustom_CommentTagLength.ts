import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertParametersCustom_CommentTagLength =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("CommentTagLength")(
      CommentTagLength,
    )((p: (input: CommentTagLength) => CommentTagLength) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
