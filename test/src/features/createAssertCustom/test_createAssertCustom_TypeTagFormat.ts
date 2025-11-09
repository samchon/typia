import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagFormat = (): void => _test_assert(CustomGuardError)(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)(typia.createAssert<TypeTagFormat>((p) => new CustomGuardError(p)));
