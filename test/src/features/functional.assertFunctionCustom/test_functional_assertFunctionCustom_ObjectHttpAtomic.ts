import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertFunctionCustom_ObjectHttpAtomic = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ObjectHttpAtomic")(
    ObjectHttpAtomic,
  )((p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
