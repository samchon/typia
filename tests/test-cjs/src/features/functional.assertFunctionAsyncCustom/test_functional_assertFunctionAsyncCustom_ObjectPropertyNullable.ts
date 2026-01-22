import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertFunctionAsyncCustom_ObjectPropertyNullable =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ObjectPropertyNullable",
    )(ObjectPropertyNullable)(
      (p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
