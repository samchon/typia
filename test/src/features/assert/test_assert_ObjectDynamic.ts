import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { TypeGuardError } from "typia";

export const test_assert_ObjectDynamic = _test_assert(TypeGuardError)(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((input) => typia.assert<ObjectDynamic>(input));
