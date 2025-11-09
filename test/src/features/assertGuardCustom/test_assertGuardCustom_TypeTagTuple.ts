import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TypeTagTuple = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)((input) => typia.assertGuard<TypeTagTuple>(input, (p) => new CustomGuardError(p)));
