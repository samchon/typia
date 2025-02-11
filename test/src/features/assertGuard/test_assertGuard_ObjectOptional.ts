import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectOptional = _test_assertGuard(TypeGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)((input) => typia.assertGuard<ObjectOptional>(input));
