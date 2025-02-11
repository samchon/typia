import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertReturnCustom_ObjectPropertyNullable =
  _test_functional_assertReturn(CustomGuardError)("ObjectPropertyNullable")(
    ObjectPropertyNullable,
  )((p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
