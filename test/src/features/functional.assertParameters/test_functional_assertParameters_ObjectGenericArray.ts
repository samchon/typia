import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertParameters_ObjectGenericArray =
  _test_functional_assertParameters(TypeGuardError)("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
    typia.functional.assertParameters(p),
  );
