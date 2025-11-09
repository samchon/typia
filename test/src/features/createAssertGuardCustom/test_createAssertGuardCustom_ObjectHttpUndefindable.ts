import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createAssertGuardCustom_ObjectHttpUndefindable = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.createAssertGuard<ObjectHttpUndefindable>(
      (p) => new CustomGuardError(p),
    ),
  );
