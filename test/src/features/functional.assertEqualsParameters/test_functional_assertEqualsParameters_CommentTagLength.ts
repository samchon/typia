import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsParameters_CommentTagLength =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)("CommentTagLength")(
      CommentTagLength,
    )((p: (input: CommentTagLength) => CommentTagLength) =>
      typia.functional.assertEqualsParameters(p),
    );
