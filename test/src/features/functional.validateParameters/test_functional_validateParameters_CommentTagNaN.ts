import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateParameters_CommentTagNaN =
  _test_functional_validateParameters("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.validateParameters(p),
  );
