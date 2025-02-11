import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { TypeGuardError } from "typia";

export const test_assert_ObjectGeneric = _test_assert(TypeGuardError)(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)((input) => typia.assert<ObjectGeneric>(input));
