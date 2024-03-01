import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createAssert_ObjectUnionCompositePointer = _test_assert(
  TypeGuardError,
)("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
  ObjectUnionCompositePointer,
)(typia.createAssert<ObjectUnionCompositePointer>());
