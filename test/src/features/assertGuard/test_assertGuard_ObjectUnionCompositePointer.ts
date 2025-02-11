import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_assertGuard_ObjectUnionCompositePointer = _test_assertGuard(
  TypeGuardError,
)("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
  ObjectUnionCompositePointer,
)((input) => typia.assertGuard<ObjectUnionCompositePointer>(input));
