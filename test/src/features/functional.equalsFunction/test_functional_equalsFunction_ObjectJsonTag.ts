import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_equalsFunction_ObjectJsonTag = _test_functional_equalsFunction(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => ObjectJsonTag) => typia.functional.equalsFunction(p),
)