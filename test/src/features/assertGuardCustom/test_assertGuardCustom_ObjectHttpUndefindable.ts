import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectHttpUndefindable = _test_assertGuard(
  CustomGuardError,
)("ObjectHttpUndefindable")<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  (input) =>
    typia.assertGuard<ObjectHttpUndefindable>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
