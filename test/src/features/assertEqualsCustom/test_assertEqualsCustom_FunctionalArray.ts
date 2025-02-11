import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_FunctionalArray = _test_assertEquals(CustomGuardError)(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)((input) => typia.assertEquals<FunctionalArray>(input, (p) => new CustomGuardError(p)));
