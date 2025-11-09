import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_createAssertCloneCustom_DynamicNever = (): void =>
  _test_misc_assertClone(CustomGuardError)("DynamicNever")<DynamicNever>(
    DynamicNever,
  )(typia.misc.createAssertClone<DynamicNever>((p) => new CustomGuardError(p)));
