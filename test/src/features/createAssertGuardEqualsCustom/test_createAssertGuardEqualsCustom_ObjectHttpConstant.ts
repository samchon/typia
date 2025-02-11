import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_createAssertGuardEqualsCustom_ObjectHttpConstant =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)(
    typia.createAssertGuardEquals<ObjectHttpConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
