import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createAssertGuardEquals_ObjectUnionExplicitPointer =
  (): void =>
    _test_assertGuardEquals(TypeGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
      typia.createAssertGuardEquals<ObjectUnionExplicitPointer>(),
    );
