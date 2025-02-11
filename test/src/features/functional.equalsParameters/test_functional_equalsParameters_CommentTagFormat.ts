import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_equalsParameters_CommentTagFormat = _test_functional_equalsParameters(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.equalsParameters(p),
)