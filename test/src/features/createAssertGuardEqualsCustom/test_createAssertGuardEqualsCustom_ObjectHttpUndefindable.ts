import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createAssertGuardEqualsCustom_ObjectHttpUndefindable =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.createAssertGuardEquals<ObjectHttpUndefindable>(
      (p) => new CustomGuardError(p),
    ),
  );
