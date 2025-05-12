import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertParametersCustom_CommentTagPattern =
  _test_functional_assertParameters(CustomGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
