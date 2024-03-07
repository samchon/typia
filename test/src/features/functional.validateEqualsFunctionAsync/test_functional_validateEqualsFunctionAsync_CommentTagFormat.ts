import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateEqualsFunctionAsync_CommentTagFormat =
  _test_functional_validateEqualsFunctionAsync("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.validateEqualsFunction(p),
  );
