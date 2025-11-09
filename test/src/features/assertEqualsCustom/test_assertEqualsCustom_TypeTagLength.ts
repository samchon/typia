import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TypeTagLength = (): void => _test_assertEquals(CustomGuardError)(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.assertEquals<TypeTagLength>(input, (p) => new CustomGuardError(p)));
