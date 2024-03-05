import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_isParameters_CommentTagInfinite =
  _test_functional_isParameters("CommentTagInfinite")(CommentTagInfinite)(
    (p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.isParameters(p),
  );
