import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_isFunction_ObjectJsonTag = (): void => _test_functional_isFunction(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => ObjectJsonTag) => typia.functional.isFunction(p),
)