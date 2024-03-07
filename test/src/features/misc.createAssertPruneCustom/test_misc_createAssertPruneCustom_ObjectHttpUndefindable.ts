import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectHttpUndefindable =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.misc.createAssertPrune<ObjectHttpUndefindable>(
      (p) => new CustomGuardError(p),
    ),
  );
