import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_assertGuardEquals_ObjectHierarchical = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)((input) =>
    typia.assertGuardEquals<ObjectHierarchical>(input),
  );
