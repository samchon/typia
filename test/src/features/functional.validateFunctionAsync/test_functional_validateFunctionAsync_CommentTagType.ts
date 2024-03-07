import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateFunctionAsync_CommentTagType =
  _test_functional_validateFunctionAsync("CommentTagType")(CommentTagType)(
    (p: (input: CommentTagType) => Promise<CommentTagType>) =>
      typia.functional.validateFunction(p),
  );
