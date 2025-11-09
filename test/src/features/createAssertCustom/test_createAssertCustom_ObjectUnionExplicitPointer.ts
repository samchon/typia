import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectUnionExplicitPointer = (): void => _test_assert(CustomGuardError)(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)(typia.createAssert<ObjectUnionExplicitPointer>((p) => new CustomGuardError(p)));
