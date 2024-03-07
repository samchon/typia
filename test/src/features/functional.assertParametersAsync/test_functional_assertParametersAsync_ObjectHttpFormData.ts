import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectHttpFormData =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectHttpFormData")(
    ObjectHttpFormData,
  )((p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
    typia.functional.assertParameters(p),
  );
