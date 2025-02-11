import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertEqualsParameters_CommentTagFormat =
  _test_functional_assertEqualsParameters(TypeGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => CommentTagFormat) =>
    typia.functional.assertEqualsParameters(p),
  );
