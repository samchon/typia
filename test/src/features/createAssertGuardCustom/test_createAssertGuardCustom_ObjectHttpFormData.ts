import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_createAssertGuardCustom_ObjectHttpFormData =
  _test_assertGuard(CustomGuardError)("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )(
    typia.createAssertGuard<ObjectHttpFormData>((p) => new CustomGuardError(p)),
  );
