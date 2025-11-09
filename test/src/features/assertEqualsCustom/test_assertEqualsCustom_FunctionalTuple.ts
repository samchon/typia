import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_FunctionalTuple = (): void => _test_assertEquals(CustomGuardError)(
    "FunctionalTuple",
)<FunctionalTuple>(
    FunctionalTuple
)((input) => typia.assertEquals<FunctionalTuple>(input, (p) => new CustomGuardError(p)));
