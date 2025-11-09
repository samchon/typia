import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ObjectHttpTypeTag = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ObjectHttpTypeTag"
)(ObjectHttpTypeTag)(
  (p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
    typia.functional.assertEqualsFunction(p),
)