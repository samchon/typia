import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateEqualsParametersAsync_CommentTagFormat =
  _test_functional_validateEqualsParametersAsync("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.validateEqualsParameters(p),
  );
