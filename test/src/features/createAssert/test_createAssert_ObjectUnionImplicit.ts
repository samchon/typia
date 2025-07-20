import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssert_ObjectUnionImplicit = (): void =>
  _test_assert(TypeGuardError)("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )(typia.createAssert<ObjectUnionImplicit>());
