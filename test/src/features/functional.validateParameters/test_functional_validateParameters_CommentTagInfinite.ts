import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateParameters_CommentTagInfinite =
  _test_functional_validateParameters("CommentTagInfinite")(CommentTagInfinite)(
    (p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.validateParameters(p),
  );
