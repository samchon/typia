import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_isParameters_CommentTagTypeBigInt =
  _test_functional_isParameters("CommentTagTypeBigInt")(CommentTagTypeBigInt)(
    (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
      typia.functional.isParameters(p),
  );
