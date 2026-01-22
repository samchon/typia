import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertParametersCustom_CommentTagNaN = (): void =>
  _test_functional_assertParameters(CustomGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
