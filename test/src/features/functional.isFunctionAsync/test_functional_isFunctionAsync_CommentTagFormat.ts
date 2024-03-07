import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_isFunctionAsync_CommentTagFormat =
  _test_functional_isFunctionAsync("CommentTagFormat")(CommentTagFormat)(
    (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
      typia.functional.isFunction(p),
  );
