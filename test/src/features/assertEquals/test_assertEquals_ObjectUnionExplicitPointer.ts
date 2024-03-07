import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectUnionExplicitPointer = _test_assertEquals(
  TypeGuardError,
)("ObjectUnionExplicitPointer")<ObjectUnionExplicitPointer>(
  ObjectUnionExplicitPointer,
)((input) => typia.assertEquals<ObjectUnionExplicitPointer>(input));
