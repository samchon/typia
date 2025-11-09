import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ToJsonUnion = (): void => _test_assertEquals(CustomGuardError)(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)((input) => typia.assertEquals<ToJsonUnion>(input, (p) => new CustomGuardError(p)));
