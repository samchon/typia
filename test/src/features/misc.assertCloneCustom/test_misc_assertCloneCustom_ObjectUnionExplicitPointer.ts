import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_assertCloneCustom_ObjectUnionExplicitPointer =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
      typia.misc.assertClone<ObjectUnionExplicitPointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
