import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_isParametersAsync_CommentTagLength =
  _test_functional_isParametersAsync("CommentTagLength")(CommentTagLength)(
    (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.isParameters(p),
  );
