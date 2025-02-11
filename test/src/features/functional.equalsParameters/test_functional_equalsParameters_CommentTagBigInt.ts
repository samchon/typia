import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_equalsParameters_CommentTagBigInt =
  _test_functional_equalsParameters("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.equalsParameters(p),
  );
