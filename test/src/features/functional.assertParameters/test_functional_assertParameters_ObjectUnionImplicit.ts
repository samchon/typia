import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertParameters_ObjectUnionImplicit = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectUnionImplicit")(
    ObjectUnionImplicit,
  )((p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
    typia.functional.assertParameters(p),
  );
