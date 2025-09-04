import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssertCustom_ObjectUnionImplicit = (): void =>
  _test_assert(CustomGuardError)("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )(typia.createAssert<ObjectUnionImplicit>((p) => new CustomGuardError(p)));
