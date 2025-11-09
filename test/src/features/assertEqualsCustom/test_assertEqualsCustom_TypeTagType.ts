import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagType } from "../../structures/TypeTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TypeTagType = (): void => _test_assertEquals(CustomGuardError)(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)((input) => typia.assertEquals<TypeTagType>(input, (p) => new CustomGuardError(p)));
