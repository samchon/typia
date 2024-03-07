import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectUnionCompositePointer =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.assertGuardEquals<ObjectUnionCompositePointer>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
