import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectHttpUndefindable =
  _test_functional_assertParameters(TypeGuardError)("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )((p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
    typia.functional.assertParameters(p),
  );
