import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateParameters_CommentTagFormat = (): void => _test_functional_validateParameters(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.validateParameters(p),
)