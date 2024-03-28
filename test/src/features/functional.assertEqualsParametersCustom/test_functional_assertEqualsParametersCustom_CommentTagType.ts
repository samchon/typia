import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsParametersCustom_CommentTagType =
  _test_functional_assertEqualsParameters(CustomGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
