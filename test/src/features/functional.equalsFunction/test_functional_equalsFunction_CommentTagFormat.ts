import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_equalsFunction_CommentTagFormat =
  _test_functional_equalsFunction("CommentTagFormat")(CommentTagFormat)(
    (p: (input: CommentTagFormat) => CommentTagFormat) =>
      typia.functional.equalsFunction(p),
  );
