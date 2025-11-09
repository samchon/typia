import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectUnionCompositePointer = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)(typia.createAssertGuardEquals<ObjectUnionCompositePointer>((p) => new CustomGuardError(p)));
