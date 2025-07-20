import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateEqualsReturnAsync_CommentTagType =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("CommentTagType")(
      CommentTagType,
    )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
      typia.functional.validateEqualsReturn(p),
    );
