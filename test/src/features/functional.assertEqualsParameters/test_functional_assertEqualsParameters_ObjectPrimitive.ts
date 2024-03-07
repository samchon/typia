import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ObjectPrimitive =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
    typia.functional.assertEqualsParameters(p),
  );
