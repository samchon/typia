import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_assertParameters_ObjectHttpFormData = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectHttpFormData")(
    ObjectHttpFormData,
  )((p: (input: ObjectHttpFormData) => ObjectHttpFormData) =>
    typia.functional.assertParameters(p),
  );
