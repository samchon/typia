import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_assert_ObjectNullable = (): void => _test_assert(TypeGuardError)(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)((input) => typia.assert<ObjectNullable>(input));
