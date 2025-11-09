import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TypeTagRange = (): void => _test_assertEquals(CustomGuardError)(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.assertEquals<TypeTagRange>(input, (p) => new CustomGuardError(p)));
