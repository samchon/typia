import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertEqualsFunction_ObjectUnionImplicit =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ObjectUnionImplicit",
    )(ObjectUnionImplicit)(
      (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
        typia.functional.assertEqualsFunction(p),
    );
