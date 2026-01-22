import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateFunctionAsync_CommentTagFormat =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("CommentTagFormat")(
      CommentTagFormat,
    )((p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
      typia.functional.validateFunction(p),
    );
