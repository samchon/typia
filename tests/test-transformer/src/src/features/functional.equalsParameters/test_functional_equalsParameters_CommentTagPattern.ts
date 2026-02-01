import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_equalsParameters_CommentTagPattern = (): void => _test_functional_equalsParameters(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => CommentTagPattern) => typia.functional.equalsParameters(p),
)