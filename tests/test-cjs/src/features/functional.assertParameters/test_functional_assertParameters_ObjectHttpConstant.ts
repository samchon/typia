import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertParameters_ObjectHttpConstant = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectHttpConstant")(
    ObjectHttpConstant,
  )((p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
    typia.functional.assertParameters(p),
  );
