import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_createAssertPruneCustom_ObjectUnionComposite =
  (): void =>
    _test_misc_assertPrune(CustomGuardError)(
      "ObjectUnionComposite",
    )<ObjectUnionComposite>(ObjectUnionComposite)(
      typia.misc.createAssertPrune<ObjectUnionComposite>(
        (p) => new CustomGuardError(p),
      ),
    );
