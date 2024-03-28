import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_assertGuardCustom_ObjectHttpUndefindable = _test_assertGuard(
  CustomGuardError,
)("ObjectHttpUndefindable")<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  (input) =>
    typia.assertGuard<ObjectHttpUndefindable>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
