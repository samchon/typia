import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_assertReturn_ObjectHttpFormData = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectHttpFormData")(
    ObjectHttpFormData,
  )((p: (input: ObjectHttpFormData) => ObjectHttpFormData) =>
    typia.functional.assertReturn(p),
  );
