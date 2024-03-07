import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ObjectHttpArray =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => ObjectHttpArray) =>
    typia.functional.assertEqualsParameters(p),
  );
