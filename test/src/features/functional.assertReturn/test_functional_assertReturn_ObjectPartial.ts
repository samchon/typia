import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertReturn_ObjectPartial = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.assertReturn(p),
  );
