import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateEqualsParameters_CommentTagPattern =
  _test_functional_validateEqualsParameters("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.validateEqualsParameters(p),
  );
