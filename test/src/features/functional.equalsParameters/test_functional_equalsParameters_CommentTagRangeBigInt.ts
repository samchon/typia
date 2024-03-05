import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_equalsParameters_CommentTagRangeBigInt =
  _test_functional_equalsParameters("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )((p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
    typia.functional.equalsParameters(p),
  );
