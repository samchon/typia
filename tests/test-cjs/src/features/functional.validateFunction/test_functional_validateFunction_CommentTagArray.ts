import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateFunction_CommentTagArray = (): void =>
  _test_functional_validateFunction("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => CommentTagArray) =>
      typia.functional.validateFunction(p),
  );
