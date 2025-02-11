import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_validateEqualsFunction_CommentTagTypeBigInt =
  _test_functional_validateEqualsFunction("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )((p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
    typia.functional.validateEqualsFunction(p),
  );
