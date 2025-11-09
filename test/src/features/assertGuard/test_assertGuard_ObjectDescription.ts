import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectDescription = (): void => _test_assertGuard(TypeGuardError)(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)((input) => typia.assertGuard<ObjectDescription>(input));
