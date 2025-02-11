import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_validateEqualsFunction_CommentTagRangeBigInt =
  _test_functional_validateEqualsFunction("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )((p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
    typia.functional.validateEqualsFunction(p),
  );
