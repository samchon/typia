import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_assert_ObjectHttpArray = (): void => _test_assert(TypeGuardError)(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)((input) => typia.assert<ObjectHttpArray>(input));
