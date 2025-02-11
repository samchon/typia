import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertFunction_CommentTagType =
  _test_functional_assertFunction(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertFunction(p),
  );
