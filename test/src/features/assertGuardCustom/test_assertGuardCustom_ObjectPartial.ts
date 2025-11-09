import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectPartial = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.assertGuard<ObjectPartial>(input, (p) => new CustomGuardError(p)));
