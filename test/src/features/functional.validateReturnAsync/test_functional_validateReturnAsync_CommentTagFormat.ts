import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateReturnAsync_CommentTagFormat =
  _test_functional_validateReturnAsync("CommentTagFormat")(CommentTagFormat)(
    (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
      typia.functional.validateReturn(p),
  );
