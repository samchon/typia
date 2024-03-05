import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertReturn_ObjectHttpArray =
  _test_functional_assertReturn(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => ObjectHttpArray) =>
    typia.functional.assertReturn(p),
  );
