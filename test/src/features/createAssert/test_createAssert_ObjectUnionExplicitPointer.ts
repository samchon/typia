import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectUnionExplicitPointer = (): void => _test_assert(TypeGuardError)(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)(typia.createAssert<ObjectUnionExplicitPointer>());
