import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_equalsReturnAsync_CommentTagType =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("CommentTagType")(CommentTagType)(
      (p: (input: CommentTagType) => Promise<CommentTagType>) =>
        typia.functional.equalsReturn(p),
    );
