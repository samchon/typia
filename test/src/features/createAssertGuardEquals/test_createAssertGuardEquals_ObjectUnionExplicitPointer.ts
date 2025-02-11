import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectUnionExplicitPointer = _test_assertGuardEquals(TypeGuardError)(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)(typia.createAssertGuardEquals<ObjectUnionExplicitPointer>());
