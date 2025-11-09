import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectUnionExplicitPointer = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)((input) => typia.assertGuard<ObjectUnionExplicitPointer>(input, (p) => new CustomGuardError(p)));
