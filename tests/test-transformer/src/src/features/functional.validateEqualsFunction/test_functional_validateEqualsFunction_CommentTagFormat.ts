import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateEqualsFunction_CommentTagFormat = (): void => _test_functional_validateEqualsFunction(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.validateEqualsFunction(p),
)