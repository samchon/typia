import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertEqualsParameters_ObjectHttpConstant =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectHttpConstant")(
    ObjectHttpConstant,
  )((p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
    typia.functional.assertEqualsParameters(p),
  );
