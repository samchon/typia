import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectUnionCompositePointer = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ObjectUnionCompositePointer"
)(ObjectUnionCompositePointer)(
  (p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) => typia.functional.assertParameters(p),
)