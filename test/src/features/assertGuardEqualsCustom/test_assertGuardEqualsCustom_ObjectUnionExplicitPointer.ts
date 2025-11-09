import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_assertGuardEqualsCustom_ObjectUnionExplicitPointer =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
      typia.assertGuardEquals<ObjectUnionExplicitPointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
