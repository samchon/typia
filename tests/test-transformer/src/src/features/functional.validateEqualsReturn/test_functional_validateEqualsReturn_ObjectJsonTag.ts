import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_validateEqualsReturn_ObjectJsonTag = (): void => _test_functional_validateEqualsReturn(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => ObjectJsonTag) => typia.functional.validateEqualsReturn(p),
)