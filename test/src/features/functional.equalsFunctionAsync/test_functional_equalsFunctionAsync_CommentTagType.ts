import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_equalsFunctionAsync_CommentTagType =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("CommentTagType")(CommentTagType)(
      (p: (input: CommentTagType) => Promise<CommentTagType>) =>
        typia.functional.equalsFunction(p),
    );
