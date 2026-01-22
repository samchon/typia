import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_assertEqualsReturn_ObjectUnionExplicitPointer =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "ObjectUnionExplicitPointer",
    )(ObjectUnionExplicitPointer)(
      (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
        typia.functional.assertEqualsReturn(p),
    );
