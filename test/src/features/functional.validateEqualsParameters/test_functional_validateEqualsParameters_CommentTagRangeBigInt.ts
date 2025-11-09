import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_validateEqualsParameters_CommentTagRangeBigInt =
  (): void =>
    _test_functional_validateEqualsParameters("CommentTagRangeBigInt")(
      CommentTagRangeBigInt,
    )((p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
      typia.functional.validateEqualsParameters(p),
    );
