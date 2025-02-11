import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsFunctionCustom_CommentTagType =
  _test_functional_assertEqualsFunction(CustomGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
