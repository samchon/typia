import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertEqualsFunction_ObjectHttpAtomic = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectHttpAtomic")(
    ObjectHttpAtomic,
  )((p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) =>
    typia.functional.assertEqualsFunction(p),
  );
