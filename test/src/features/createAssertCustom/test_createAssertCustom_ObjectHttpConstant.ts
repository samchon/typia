import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_createAssertCustom_ObjectHttpConstant = (): void =>
  _test_assert(CustomGuardError)("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )(typia.createAssert<ObjectHttpConstant>((p) => new CustomGuardError(p)));
