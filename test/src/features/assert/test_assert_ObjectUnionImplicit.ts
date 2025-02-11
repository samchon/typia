import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { TypeGuardError } from "typia";

export const test_assert_ObjectUnionImplicit = _test_assert(TypeGuardError)(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)((input) => typia.assert<ObjectUnionImplicit>(input));
