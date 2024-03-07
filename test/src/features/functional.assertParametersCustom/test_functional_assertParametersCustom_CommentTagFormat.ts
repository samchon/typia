import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_CommentTagFormat =
  _test_functional_assertParameters(CustomGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => CommentTagFormat) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
