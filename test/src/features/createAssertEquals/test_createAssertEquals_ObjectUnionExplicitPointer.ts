import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createAssertEquals_ObjectUnionExplicitPointer = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
    typia.createAssertEquals<ObjectUnionExplicitPointer>(),
  );
