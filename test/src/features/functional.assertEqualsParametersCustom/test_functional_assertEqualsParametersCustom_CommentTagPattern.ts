import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertEqualsParametersCustom_CommentTagPattern =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "CommentTagPattern",
  )(CommentTagPattern)((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
