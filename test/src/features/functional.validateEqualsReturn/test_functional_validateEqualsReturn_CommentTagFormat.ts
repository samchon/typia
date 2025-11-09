import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateEqualsReturn_CommentTagFormat = (): void => _test_functional_validateEqualsReturn(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.validateEqualsReturn(p),
)