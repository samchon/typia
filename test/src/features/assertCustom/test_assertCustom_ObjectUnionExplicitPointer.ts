import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectUnionExplicitPointer = _test_assert(
  CustomGuardError,
)("ObjectUnionExplicitPointer")<ObjectUnionExplicitPointer>(
  ObjectUnionExplicitPointer,
)((input) =>
  typia.assert<ObjectUnionExplicitPointer>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
