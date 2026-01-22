import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_isFunctionAsync_CommentTagType =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("CommentTagType")(CommentTagType)(
      (p: (input: CommentTagType) => Promise<CommentTagType>) =>
        typia.functional.isFunction(p),
    );
