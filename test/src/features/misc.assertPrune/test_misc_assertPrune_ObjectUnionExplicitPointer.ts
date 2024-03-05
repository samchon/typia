import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_assertPrune_ObjectUnionExplicitPointer =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
    typia.misc.assertPrune<ObjectUnionExplicitPointer>(input),
  );
