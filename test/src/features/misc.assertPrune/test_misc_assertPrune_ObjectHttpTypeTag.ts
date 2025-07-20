import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_misc_assertPrune_ObjectHttpTypeTag = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
    typia.misc.assertPrune<ObjectHttpTypeTag>(input),
  );
