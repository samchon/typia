import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateParametersAsync_CommentTagPattern =
  _test_functional_validateParametersAsync("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.validateParameters(p),
  );
