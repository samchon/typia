import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertFunction_ObjectHttpAtomic = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectHttpAtomic")(
    ObjectHttpAtomic,
  )((p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) =>
    typia.functional.assertFunction(p),
  );
