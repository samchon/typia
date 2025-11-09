import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateParameters_CommentTagBigInt = (): void => _test_functional_validateParameters(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => CommentTagBigInt) => typia.functional.validateParameters(p),
)