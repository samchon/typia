import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_isFunction_ObjectUnionExplicitPointer = (): void => _test_functional_isFunction(
  "ObjectUnionExplicitPointer"
)(ObjectUnionExplicitPointer)(
  (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) => typia.functional.isFunction(p),
)