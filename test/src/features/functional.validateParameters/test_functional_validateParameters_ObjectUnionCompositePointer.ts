import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateParameters_ObjectUnionCompositePointer = (): void => _test_functional_validateParameters(
  "ObjectUnionCompositePointer"
)(ObjectUnionCompositePointer)(
  (p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) => typia.functional.validateParameters(p),
)