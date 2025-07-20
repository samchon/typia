import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_misc_createAssertPruneCustom_ObjectHttpUndefindable =
  (): void =>
    _test_misc_assertPrune(CustomGuardError)(
      "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
      typia.misc.createAssertPrune<ObjectHttpUndefindable>(
        (p) => new CustomGuardError(p),
      ),
    );
