import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_equalsParameters_CommentTagTypeBigInt = (): void => _test_functional_equalsParameters(
  "CommentTagTypeBigInt"
)(CommentTagTypeBigInt)(
  (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) => typia.functional.equalsParameters(p),
)