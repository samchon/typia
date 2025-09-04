import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_isReturnAsync_CommentTagType = (): Promise<void> =>
  _test_functional_isReturnAsync("CommentTagType")(CommentTagType)(
    (p: (input: CommentTagType) => Promise<CommentTagType>) =>
      typia.functional.isReturn(p),
  );
