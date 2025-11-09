import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectUnionExplicitPointer = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)((input) => typia.assertGuardEquals<ObjectUnionExplicitPointer>(input));
