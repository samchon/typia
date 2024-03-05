import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertParameters_CommentTagFormat =
  _test_functional_assertParameters(TypeGuardError)("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => CommentTagFormat) =>
    typia.functional.assertParameters(p),
  );
