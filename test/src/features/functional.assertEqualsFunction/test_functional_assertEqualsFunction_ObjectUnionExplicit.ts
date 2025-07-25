import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertEqualsFunction_ObjectUnionExplicit =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ObjectUnionExplicit",
    )(ObjectUnionExplicit)(
      (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
        typia.functional.assertEqualsFunction(p),
    );
