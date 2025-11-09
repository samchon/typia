import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TypeTagArray = (): void => _test_assertEquals(CustomGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((input) => typia.assertEquals<TypeTagArray>(input, (p) => new CustomGuardError(p)));
