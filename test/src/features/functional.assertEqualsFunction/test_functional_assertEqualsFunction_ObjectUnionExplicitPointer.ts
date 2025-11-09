import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_assertEqualsFunction_ObjectUnionExplicitPointer =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ObjectUnionExplicitPointer",
    )(ObjectUnionExplicitPointer)(
      (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
        typia.functional.assertEqualsFunction(p),
    );
