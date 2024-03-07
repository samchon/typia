import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateEqualsReturnAsync_CommentTagFormat =
  _test_functional_validateEqualsReturnAsync("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.validateEqualsReturn(p),
  );
