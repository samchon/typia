import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsParameters_CommentTagType =
  _test_functional_assertEqualsParameters(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => CommentTagType) =>
    typia.functional.assertEqualsParameters(p),
  );
