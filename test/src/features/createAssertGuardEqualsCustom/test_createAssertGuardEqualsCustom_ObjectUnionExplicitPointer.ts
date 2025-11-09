import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createAssertGuardEqualsCustom_ObjectUnionExplicitPointer =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
      typia.createAssertGuardEquals<ObjectUnionExplicitPointer>(
        (p) => new CustomGuardError(p),
      ),
    );
