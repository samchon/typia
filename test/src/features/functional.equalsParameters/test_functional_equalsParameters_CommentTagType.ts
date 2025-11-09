import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_equalsParameters_CommentTagType = (): void => _test_functional_equalsParameters(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => CommentTagType) => typia.functional.equalsParameters(p),
)