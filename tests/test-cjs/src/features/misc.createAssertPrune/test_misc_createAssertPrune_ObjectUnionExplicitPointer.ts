import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_createAssertPrune_ObjectUnionExplicitPointer =
  (): void =>
    _test_misc_assertPrune(TypeGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
      typia.misc.createAssertPrune<ObjectUnionExplicitPointer>(),
    );
