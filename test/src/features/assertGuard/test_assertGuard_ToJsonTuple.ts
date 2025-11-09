import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { TypeGuardError } from "typia";

export const test_assertGuard_ToJsonTuple = (): void => _test_assertGuard(TypeGuardError)(
    "ToJsonTuple",
)<ToJsonTuple>(
    ToJsonTuple
)((input) => typia.assertGuard<ToJsonTuple>(input));
