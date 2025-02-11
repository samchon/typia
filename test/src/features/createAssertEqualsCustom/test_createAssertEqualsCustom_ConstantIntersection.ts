import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ConstantIntersection = _test_assertEquals(CustomGuardError)(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.createAssertEquals<ConstantIntersection>((p) => new CustomGuardError(p)));
