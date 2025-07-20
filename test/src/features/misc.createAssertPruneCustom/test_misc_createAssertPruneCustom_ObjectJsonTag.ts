import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_createAssertPruneCustom_ObjectJsonTag = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )(
    typia.misc.createAssertPrune<ObjectJsonTag>((p) => new CustomGuardError(p)),
  );
