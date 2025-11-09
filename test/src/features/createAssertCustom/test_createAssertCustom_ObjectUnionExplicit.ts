import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertCustom_ObjectUnionExplicit = (): void =>
  _test_assert(CustomGuardError)("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )(typia.createAssert<ObjectUnionExplicit>((p) => new CustomGuardError(p)));
