import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_equalsFunction_CommentTagBigInt =
  _test_functional_equalsFunction("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.equalsFunction(p),
  );
