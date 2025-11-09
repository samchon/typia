import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_ObjectUnionComposite = (): void => _test_functional_assertFunction(TypeGuardError)(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => ObjectUnionComposite) => typia.functional.assertFunction(p),
)