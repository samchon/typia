import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertParameters_ObjectHttpArray = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => ObjectHttpArray) =>
    typia.functional.assertParameters(p),
  );
