import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_assertGuard_ObjectUnionExplicitPointer = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
    typia.assertGuard<ObjectUnionExplicitPointer>(input),
  );
