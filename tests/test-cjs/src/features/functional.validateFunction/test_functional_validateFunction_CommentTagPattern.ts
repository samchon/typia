import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateFunction_CommentTagPattern = (): void =>
  _test_functional_validateFunction("CommentTagPattern")(CommentTagPattern)(
    (p: (input: CommentTagPattern) => CommentTagPattern) =>
      typia.functional.validateFunction(p),
  );
