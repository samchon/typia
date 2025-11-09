import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_isReturn_ObjectHttpCommentTag = (): void => _test_functional_isReturn(
  "ObjectHttpCommentTag"
)(ObjectHttpCommentTag)(
  (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) => typia.functional.isReturn(p),
)