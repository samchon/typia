import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateEqualsParameters_CommentTagRange =
  _test_functional_validateEqualsParameters("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => CommentTagRange) =>
      typia.functional.validateEqualsParameters(p),
  );
