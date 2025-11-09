import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectNullable = (): void => _test_assert(TypeGuardError)(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.createAssert<ObjectNullable>());
