import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_validateFunction_ObjectJsonTag = (): void => _test_functional_validateFunction(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => ObjectJsonTag) => typia.functional.validateFunction(p),
)