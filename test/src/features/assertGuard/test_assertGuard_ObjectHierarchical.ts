import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_assertGuard_ObjectHierarchical = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )((input) => typia.assertGuard<ObjectHierarchical>(input));
