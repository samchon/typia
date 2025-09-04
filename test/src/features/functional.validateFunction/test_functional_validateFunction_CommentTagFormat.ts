import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateFunction_CommentTagFormat = (): void =>
  _test_functional_validateFunction("CommentTagFormat")(CommentTagFormat)(
    (p: (input: CommentTagFormat) => CommentTagFormat) =>
      typia.functional.validateFunction(p),
  );
