import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertFunctionCustom_CommentTagType = (): void =>
  _test_functional_assertFunction(CustomGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
