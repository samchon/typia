import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectUnionCompositePointer = _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "ObjectUnionCompositePointer"
)(ObjectUnionCompositePointer)(
  (p: (input: ObjectUnionCompositePointer) => Promise<ObjectUnionCompositePointer>) =>
    typia.functional.assertEqualsParameters(p),
)