import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateFunction_CommentTagDefault =
  _test_functional_validateFunction("CommentTagDefault")(CommentTagDefault)(
    (p: (input: CommentTagDefault) => CommentTagDefault) =>
      typia.functional.validateFunction(p),
  );
