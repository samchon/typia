import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertFunctionCustom_CommentTagFormat = (): void =>
  _test_functional_assertFunction(CustomGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => CommentTagFormat) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
