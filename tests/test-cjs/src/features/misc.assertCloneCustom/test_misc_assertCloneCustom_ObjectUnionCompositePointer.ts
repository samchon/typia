import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_assertCloneCustom_ObjectUnionCompositePointer =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
      typia.misc.assertClone<ObjectUnionCompositePointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
