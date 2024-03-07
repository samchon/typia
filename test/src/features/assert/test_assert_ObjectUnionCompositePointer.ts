import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_assert_ObjectUnionCompositePointer = _test_assert(
  TypeGuardError,
)("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
  ObjectUnionCompositePointer,
)((input) => typia.assert<ObjectUnionCompositePointer>(input));
