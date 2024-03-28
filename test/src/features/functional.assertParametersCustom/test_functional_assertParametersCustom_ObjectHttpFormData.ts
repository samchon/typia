import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_assertParametersCustom_ObjectHttpFormData =
  _test_functional_assertParameters(CustomGuardError)("ObjectHttpFormData")(
    ObjectHttpFormData,
  )((p: (input: ObjectHttpFormData) => ObjectHttpFormData) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
