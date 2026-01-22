import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_createAssertPrune_ObjectUnionCompositePointer =
  (): void =>
    _test_misc_assertPrune(TypeGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
      typia.misc.createAssertPrune<ObjectUnionCompositePointer>(),
    );
