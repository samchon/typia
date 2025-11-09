import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_FunctionalPropertyUnion = (): void => _test_assertEquals(CustomGuardError)(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(
    FunctionalPropertyUnion
)((input) => typia.assertEquals<FunctionalPropertyUnion>(input, (p) => new CustomGuardError(p)));
