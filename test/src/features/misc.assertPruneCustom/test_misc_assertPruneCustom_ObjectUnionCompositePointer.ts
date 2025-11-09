import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_assertPruneCustom_ObjectUnionCompositePointer =
  (): void =>
    _test_misc_assertPrune(CustomGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
      typia.misc.assertPrune<ObjectUnionCompositePointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
