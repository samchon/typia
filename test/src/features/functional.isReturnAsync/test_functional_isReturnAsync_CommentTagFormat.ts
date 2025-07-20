import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_isReturnAsync_CommentTagFormat =
  (): Promise<void> =>
    _test_functional_isReturnAsync("CommentTagFormat")(CommentTagFormat)(
      (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
        typia.functional.isReturn(p),
    );
