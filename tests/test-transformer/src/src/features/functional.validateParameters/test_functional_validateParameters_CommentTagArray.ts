import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateParameters_CommentTagArray = (): void => _test_functional_validateParameters(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => CommentTagArray) => typia.functional.validateParameters(p),
)