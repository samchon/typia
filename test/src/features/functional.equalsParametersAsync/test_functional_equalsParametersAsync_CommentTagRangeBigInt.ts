import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_equalsParametersAsync_CommentTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("CommentTagRangeBigInt")(
      CommentTagRangeBigInt,
    )((p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
      typia.functional.equalsParameters(p),
    );
