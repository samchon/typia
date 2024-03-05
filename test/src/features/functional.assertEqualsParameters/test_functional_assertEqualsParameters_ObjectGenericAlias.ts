import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertEqualsParameters_ObjectGenericAlias =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
    typia.functional.assertEqualsParameters(p),
  );
