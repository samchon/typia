import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_assert_ObjectTuple = (): void => _test_assert(TypeGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.assert<ObjectTuple>(input));
