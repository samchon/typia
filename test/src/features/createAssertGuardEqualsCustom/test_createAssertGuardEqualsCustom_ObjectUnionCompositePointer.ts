import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createAssertGuardEqualsCustom_ObjectUnionCompositePointer =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    typia.createAssertGuardEquals<ObjectUnionCompositePointer>(
      (p) => new CustomGuardError(p),
    ),
  );
