import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TypeTagNaN = (): void => _test_assertEquals(CustomGuardError)(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)(typia.createAssertEquals<TypeTagNaN>((p) => new CustomGuardError(p)));
