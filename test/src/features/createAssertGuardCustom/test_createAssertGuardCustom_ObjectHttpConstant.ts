import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_createAssertGuardCustom_ObjectHttpConstant =
  _test_assertGuard(CustomGuardError)("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )(
    typia.createAssertGuard<ObjectHttpConstant>((p) => new CustomGuardError(p)),
  );
