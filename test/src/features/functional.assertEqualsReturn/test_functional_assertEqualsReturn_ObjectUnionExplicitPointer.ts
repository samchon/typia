import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ObjectUnionExplicitPointer =
  _test_functional_assertEqualsReturn(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )(ObjectUnionExplicitPointer)(
    (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
      typia.functional.assertEqualsReturn(p),
  );
