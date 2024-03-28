import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_assertReturnCustom_ObjectHttpFormData =
  _test_functional_assertReturn(CustomGuardError)("ObjectHttpFormData")(
    ObjectHttpFormData,
  )((p: (input: ObjectHttpFormData) => ObjectHttpFormData) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
