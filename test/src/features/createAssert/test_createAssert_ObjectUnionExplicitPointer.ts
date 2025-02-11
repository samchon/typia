import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createAssert_ObjectUnionExplicitPointer = _test_assert(
  TypeGuardError,
)("ObjectUnionExplicitPointer")<ObjectUnionExplicitPointer>(
  ObjectUnionExplicitPointer,
)(typia.createAssert<ObjectUnionExplicitPointer>());
