import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_misc_assertPrune_ObjectHttpUndefindable =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    typia.misc.assertPrune<ObjectHttpUndefindable>(input),
  );
