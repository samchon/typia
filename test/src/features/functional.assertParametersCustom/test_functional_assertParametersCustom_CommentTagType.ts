import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_CommentTagType =
  _test_functional_assertParameters(CustomGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
