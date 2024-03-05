import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateEqualsParameters_CommentTagArray =
  _test_functional_validateEqualsParameters("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => CommentTagArray) =>
      typia.functional.validateEqualsParameters(p),
  );
