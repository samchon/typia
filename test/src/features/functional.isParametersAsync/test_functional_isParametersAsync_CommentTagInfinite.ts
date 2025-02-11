import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_isParametersAsync_CommentTagInfinite =
  _test_functional_isParametersAsync("CommentTagInfinite")(CommentTagInfinite)(
    (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
      typia.functional.isParameters(p),
  );
