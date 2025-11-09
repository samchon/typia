import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_equalsFunction_CommentTagRangeBigInt = (): void =>
  _test_functional_equalsFunction("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )((p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
    typia.functional.equalsFunction(p),
  );
