import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_equalsFunction_CommentTagType = (): void => _test_functional_equalsFunction(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => CommentTagType) => typia.functional.equalsFunction(p),
)