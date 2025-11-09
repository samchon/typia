import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TypeTagInfinite = (): void => _test_assertEquals(CustomGuardError)(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)((input) => typia.assertEquals<TypeTagInfinite>(input, (p) => new CustomGuardError(p)));
