import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertCustom_ObjectUnionImplicit = (): void =>
  _test_assert(CustomGuardError)("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )((input) =>
    typia.assert<ObjectUnionImplicit>(input, (p) => new CustomGuardError(p)),
  );
