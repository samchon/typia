import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectGenericUnion = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)((input) => typia.assertGuardEquals<ObjectGenericUnion>(input));
