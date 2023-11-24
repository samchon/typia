import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createAssert_ObjectUnionExplicitPointer = _test_assert(
  "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
  typia.createAssert<ObjectUnionExplicitPointer>(),
);
