import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertEqualsReturn_ObjectHttpAtomic = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectHttpAtomic")(
    ObjectHttpAtomic,
  )((p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) =>
    typia.functional.assertEqualsReturn(p),
  );
