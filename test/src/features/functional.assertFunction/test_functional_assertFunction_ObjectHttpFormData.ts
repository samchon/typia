import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_assertFunction_ObjectHttpFormData = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectHttpFormData")(
    ObjectHttpFormData,
  )((p: (input: ObjectHttpFormData) => ObjectHttpFormData) =>
    typia.functional.assertFunction(p),
  );
