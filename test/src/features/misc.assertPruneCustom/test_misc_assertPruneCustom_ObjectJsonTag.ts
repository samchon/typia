import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectJsonTag = _test_misc_assertPrune(
  CustomGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.misc.assertPrune<ObjectJsonTag>(input, (p) => new CustomGuardError(p)),
);
