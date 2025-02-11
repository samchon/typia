import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { TypeGuardError } from "typia";

export const test_assert_ObjectPropertyNullable = _test_assert(TypeGuardError)(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)((input) => typia.assert<ObjectPropertyNullable>(input));
