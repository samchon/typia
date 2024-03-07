import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateParametersAsync_CommentTagFormat =
  _test_functional_validateParametersAsync("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.validateParameters(p),
  );
