import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectUnionExplicit = (): void => _test_assert(TypeGuardError)(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)(typia.createAssert<ObjectUnionExplicit>());
