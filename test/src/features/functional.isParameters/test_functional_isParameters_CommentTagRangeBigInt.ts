import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_isParameters_CommentTagRangeBigInt =
  _test_functional_isParameters("CommentTagRangeBigInt")(CommentTagRangeBigInt)(
    (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
      typia.functional.isParameters(p),
  );
