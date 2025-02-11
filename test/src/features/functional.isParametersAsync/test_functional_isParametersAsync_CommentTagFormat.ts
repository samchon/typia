import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_isParametersAsync_CommentTagFormat =
  _test_functional_isParametersAsync("CommentTagFormat")(CommentTagFormat)(
    (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
      typia.functional.isParameters(p),
  );
