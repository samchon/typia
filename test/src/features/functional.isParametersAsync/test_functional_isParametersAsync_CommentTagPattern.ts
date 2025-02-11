import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_isParametersAsync_CommentTagPattern =
  _test_functional_isParametersAsync("CommentTagPattern")(CommentTagPattern)(
    (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      typia.functional.isParameters(p),
  );
