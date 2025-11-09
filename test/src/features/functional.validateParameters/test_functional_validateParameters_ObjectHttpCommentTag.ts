import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_validateParameters_ObjectHttpCommentTag = (): void => _test_functional_validateParameters(
  "ObjectHttpCommentTag"
)(ObjectHttpCommentTag)(
  (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) => typia.functional.validateParameters(p),
)