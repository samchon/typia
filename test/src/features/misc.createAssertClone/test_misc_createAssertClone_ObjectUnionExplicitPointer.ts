import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_createAssertClone_ObjectUnionExplicitPointer =
  (): void =>
    _test_misc_assertClone(TypeGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
      typia.misc.createAssertClone<ObjectUnionExplicitPointer>(),
    );
