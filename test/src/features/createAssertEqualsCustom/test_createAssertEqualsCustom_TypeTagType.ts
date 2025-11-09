import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagType } from "../../structures/TypeTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TypeTagType = (): void => _test_assertEquals(CustomGuardError)(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.createAssertEquals<TypeTagType>((p) => new CustomGuardError(p)));
