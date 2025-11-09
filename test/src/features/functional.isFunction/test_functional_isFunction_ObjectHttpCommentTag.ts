import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_isFunction_ObjectHttpCommentTag = (): void => _test_functional_isFunction(
  "ObjectHttpCommentTag"
)(ObjectHttpCommentTag)(
  (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) => typia.functional.isFunction(p),
)