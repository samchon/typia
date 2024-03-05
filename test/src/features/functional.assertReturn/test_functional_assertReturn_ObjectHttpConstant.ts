import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertReturn_ObjectHttpConstant =
  _test_functional_assertReturn(TypeGuardError)("ObjectHttpConstant")(
    ObjectHttpConstant,
  )((p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
    typia.functional.assertReturn(p),
  );
