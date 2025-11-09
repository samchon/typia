import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertReturnCustom_ObjectHttpArray = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => ObjectHttpArray) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
