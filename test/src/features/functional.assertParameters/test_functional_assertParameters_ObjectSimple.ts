import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertParameters_ObjectSimple =
  _test_functional_assertParameters(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => ObjectSimple) =>
    typia.functional.assertParameters(p),
  );
