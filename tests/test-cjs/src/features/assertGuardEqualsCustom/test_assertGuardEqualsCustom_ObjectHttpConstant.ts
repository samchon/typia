import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assertGuardEqualsCustom_ObjectHttpConstant = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.assertGuardEquals<ObjectHttpConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
