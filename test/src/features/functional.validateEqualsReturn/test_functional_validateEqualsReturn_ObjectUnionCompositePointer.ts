import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateEqualsReturn_ObjectUnionCompositePointer = (): void => _test_functional_validateEqualsReturn(
  "ObjectUnionCompositePointer"
)(ObjectUnionCompositePointer)(
  (p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) => typia.functional.validateEqualsReturn(p),
)